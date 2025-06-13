import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jjfawpvkikaarcmjjewd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZmF3cHZraWthYXJjbWpqZXdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3ODU0OTAsImV4cCI6MjA2NTM2MTQ5MH0.L9flxR0fr4LqF2gLh-NDemiAHsDJV_F140ulhkLqY84'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
