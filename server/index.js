const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const { encrypt, decrypt } = require('./encryption');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
console.log('Supabase URL', process.env.SUPABASE_URL); 
console.log('ENCRYPTION_KEY:', process.env.ENCRYPTION_KEY); 
// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Backend is running!' });
});

// Create a new connection
app.post('/connections', async (req, res) => {
  const { name, skill, avatar_url, email, user_id } = req.body;
  const { data, error } = await supabase
    .from('connections')
    .insert([{ name, skill, avatar_url, email, user_id }]);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Get all connections for a user
app.get('/connections', async (req, res) => {
  const { user_id } = req.query;
  const { data, error } = await supabase
    .from('connections')
    .insert([{ name, skill, avatar_url, email, user_id }])
    .select('*')
    .eq('user_id', user_id);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Send an encrypted message
app.post('/messages', async (req, res) => {
  const { from_id, to_id, message } = req.body;
  const encryptedMessage = encrypt(message);
  const { data, error } = await supabase
    .from('messages')
    .insert([{ from_id, to_id, message: encryptedMessage }]);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Get and decrypt messages between two connections
app.get('/messages', async (req, res) => {
  const { from_id, to_id } = req.query;
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .or(`from_id.eq.${from_id},to_id.eq.${to_id}`);
  if (error) return res.status(500).json({ error: error.message });
  // Decrypt messages
  const decrypted = data.map(msg => ({
    ...msg,
    message: decrypt(msg.message)
  }));
  res.json(decrypted);
});

// Catch-all for 404 errors
app.get('/api/recommended-skills', async (req, res) => {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .limit(6);

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Endpoint: Get people you may know
app.get('/api/people-you-may-know', async (req, res) => {
  const { data, error } = await supabase
    .from('users')
    .select('id, name, avatar_url, shared_skills')
    .limit(6);

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});