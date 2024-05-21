import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Products from './assets/components/Products';
import { ProductProvider } from './assets/context/Product';

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://dummyjson.com/products")
      console.log(res.data.products)
      setItems(res.data.products)
    })()
  }, [])
  return (
    <ProductProvider value={{ items }}>
      <div>
        <Products />
      </div>
    </ProductProvider>
  )
}

export default App