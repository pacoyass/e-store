import React, { useContext } from 'react';
import { Context } from '../../Contextapi/Datacenter';
import Albums from './Albums';
import Product from './Product';



export default function Products() {
  const { products } = useContext(Context);
  return (
    <div >
      <div>
      <Albums />
      </div>
      <div className="container">
      <div className="row">
        
        {products.map(product => (
          <Product data={product} />
        ))}
    </div>
      </div>
    </div>
  );
}
