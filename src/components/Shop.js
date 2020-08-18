import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

function Shop() {

  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch(
      'https://5f2a0a4d6ae5cc0016421f59.mockapi.io/api/v1/products'
    )
    const items = await data.json()
    console.log(items)
    setItems(items)
  }

  return (
    <div className="Shop">
      <h1>Shop page</h1>
      {items.map(item => (
          <h3 key={item.id}>
              <Link to={`/shop/${item.id}`}>{item.name}</Link>
          </h3>
      ))}
    </div>
  )
}

export default Shop
