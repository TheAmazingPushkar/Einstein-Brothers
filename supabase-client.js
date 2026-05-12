// supabase-client.js

// This is your Supabase project URL (do not include /rest/v1/ for client initialization)
const SUPABASE_URL = 'https://fglhsakunpkybtuiejck.supabase.co';

// Your Anon Key (this one is correct!)
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnbGhzYWt1bnBreWJ0dWllamNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1ODUwODYsImV4cCI6MjA5NDE2MTA4Nn0.xxUvivKvqUg6diOQQPNIMFAEBCQxZHfzWhwzEdD7UBM';

// Initialize the Supabase client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);