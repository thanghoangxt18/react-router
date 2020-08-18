import React, { useState, useEffect } from 'react'

function ItemDetail({match}) {

    useEffect(() => {
        fetchItem()
        console.log(match)
    }, [])

    const [item, setItem] = useState({})

    const fetchItem = async () => {
        const data = await fetch(
            `https://5f2a0a4d6ae5cc0016421f59.mockapi.io/api/v1/products/${match.params.id}`
        )
        const item = await data.json()
        setItem(item)
        console.log(item)
    }

    return (
        <div className="ItemDetail">
            <h1>Item</h1>
            <h3>Name: {item.name}</h3>
            <h3>Price: {item.price}</h3>
        </div>
    )
}

export default ItemDetail
