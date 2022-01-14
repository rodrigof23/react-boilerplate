import React, { useEffect } from 'react';
import useProducts from '../../state/product/hooks/useProducts';

import Loading from '../../components/loading';

const Home = () => {
  const [product, isLoading, setListProducts] = useProducts();

  useEffect(() => {
    if (!product.list || product.list.length === 0) {
      setListProducts();
    }
  }, []);

  return (
    <div>
      <Loading show={isLoading} />
      <button onClick={setListProducts} type="submit">
        Refresh
      </button>
      <ul>
        {product?.list?.map(p => (
          <li className="card" key={p.id}>
            <h1>{p.title}</h1>
            <span>${p.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
