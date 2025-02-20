
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client with the project URL and anon key
export const supabase = createClient(
  'https://aieomcawcimnvwyizsyv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZW9tY2F3Y2ltbnZ3eWl6c3l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNjY2OTYsImV4cCI6MjA1NTY0MjY5Nn0.Rt6OUKRo_gowbVlOcsC-97molkNYMYbMa2E7pV60_Ng'
);
