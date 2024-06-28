import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const  supabaseUrl = "https://jkvxnhiysbtgiclidiry.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprdnhuaGl5c2J0Z2ljbGlkaXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMTQ2OTMsImV4cCI6MjAzNDc5MDY5M30.rdlbRXuGsaa3lPJ46qhnhy6k1-WwTo1-3Hyc5rAHKyw"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)