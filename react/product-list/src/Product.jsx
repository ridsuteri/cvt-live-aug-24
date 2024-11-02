import React from 'react'

const Product = (props) => {
  return (
    <div>
        <h4>{props.product.name}</h4>
        <h5>{props.product.price}</h5>
        <hr />
    </div>
  )
}

export default Product