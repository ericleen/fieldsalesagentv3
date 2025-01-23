// Update the Routes to include Locations
<Route 
  path="/locations" 
  element={session ? <Locations supabase={supabase} /> : <Auth supabase={supabase} />} 
/>
