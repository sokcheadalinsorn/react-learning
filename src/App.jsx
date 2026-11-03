import { useEffect, useState } from 'react';
import "./App.css";
function App() {
    
 const [products, setProduct] = useState([]);
 const [categories, setCategories] = useState([]);
 useEffect(() => {
   async function getProduct() {
    
      const response = await fetch("/data-product/products.json");
      
      const data = await response.json();
       setProduct(data.products);
      //  console.log(data);
   }
   getProduct();
 }, []);

    return(
      <div className='product-card'>
        {products.map((product) => (
          <div key={product.id}>
            <h3 className='name'>{product.name}</h3>
            <p>{product.description}</p>
          </div>
       ))}
      </div>

    );
}
export default App;