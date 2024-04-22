import React from 'react'

const ProductCard = ({title,imageUrl,price}) => {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
      <p>{price}</p>

    </div>
  )
}

export default ProductCard
