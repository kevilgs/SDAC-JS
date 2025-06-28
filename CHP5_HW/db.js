import { createClient } from '@supabase/supabase-js'

import { supabaseUrl, supabaseKey } from './.env.js'

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