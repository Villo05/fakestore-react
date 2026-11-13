import React from 'react'
import { useProductContext } from '../contexts/ProductContext'
import { Product } from './Product'

function Products() {
  const {productsList, load, error }=  useProductContext()
  
  if(load){
    return(
        <p>Termékek betöltése...</p>
    )
  }
  
  if(error){
    <p>
        {error}
    </p>
  }

  return (
    <div>Products
        {productsList.map((adat) => {
            return(
                <Product 
                    adat={adat}
                    key={adat.id}
                />
            )
        })}
    </div>
  )
}

export default Products