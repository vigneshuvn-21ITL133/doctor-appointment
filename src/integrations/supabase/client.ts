// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pengqvpddrxtzypfxzds.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlbmdxdnBkZHJ4dHp5cGZ4emRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczODUyNjgsImV4cCI6MjA1Mjk2MTI2OH0.eErwbs0mcgwz5HZ-6XnuXbI8mlzDP-R6ARqZhvGhNrI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);