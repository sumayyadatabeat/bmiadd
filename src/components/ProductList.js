
import ProductCard from './ProductCard'
import { useProductList } from '../hooks/useProductList'

const ProductList = () => {

  
    const {products}=useProductList();
    
  return (
    <div className='productCard'>
      {
        products.map(product =><ProductCard 
            title={product.title}
            imageUrl={product.image}
            price={product.price} />
            )
      }
    </div>
  )
}

export default ProductList
