import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eoapxnpxpzwuagkfvokh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvYXB4bnB4cHp3dWFna2Z2b2toIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NDYyMTIsImV4cCI6MjA2NjUyMjIxMn0.6FMWk9XXfeabGHWqcWLnRnN3i3UwH0NfyGTP1PPqUuY'
const supabase = createClient(supabaseUrl, supabaseKey)

async function addProduct(name, price) {
  const { data, error } = await supabase
    .from('Product') 
    .insert([{ name, price }])
    .select()
  if (error) {
    console.error('Insert error:', error)
  } else {
    console.log('Inserted:', data)
  }
}

// addProduct('Tablet', 60000)

async function getProducts() {
  const { data, error } = await supabase
    .from('Product')
    .select('*')
  if (error) {
    console.error('Fetch error:', error)
  } else {
    console.log('Products:', data)
  }
}

// getProducts()

async function updateProduct(id, params) {
  const { data, error } = await supabase
    .from('Product')
    .update(params)
    .eq('id', id)
    .select()
  if (error) {
    console.error('Update error:', error)
  } else {
    console.log('Updated:', data)
  }
}
// updateProduct(1, { name: 'Smartphone', price: 50000 })

async function deleteProduct(id) {
  const { data, error } = await supabase
    .from('Product')
    .delete()
    .eq('id', id)
    .select()
  if (error) {
    console.error('Delete error:', error)
  } else {
    console.log('Deleted:', data)
  }
}
// deleteProduct(1)