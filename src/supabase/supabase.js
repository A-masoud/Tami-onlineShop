import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ovaqrwsbtodyappwijlb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92YXFyd3NidG9keWFwcHdpamxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3Mjc5NDgsImV4cCI6MjA3MDMwMzk0OH0.yhZiEN7hZukkMDXePZ6TbdlWEzwjFJTTOlUnF1T1WdQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
