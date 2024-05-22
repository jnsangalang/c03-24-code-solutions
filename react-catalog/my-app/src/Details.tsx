import { useEffect, useState } from 'react';
import { Product, readProduct, toDollars } from './lib';
import { Link, useParams, useNavigate } from 'react-router-dom';
export function Details() {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  4;
  const [error, setError] = useState<unknown>();

  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function loadItems(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadItems(+productId);
    }
  }, [productId]);

  if (isLoading) return <div>Loading.....</div>;
  if (error || !product) {
    return (
      <div>
        Error loading product {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  const { name, imageUrl, shortDescription, longDescription, price } = product;

  function handleAddToCart(): void {
    alert(`Added ${name} to cart`);
    navigate('/');
  }
  return (
    <div className="container">
      <div className="p-6">
        <div className="flex flex-wrap">
          <div className="flex-grow flex-1 px-4">
            <Link to="/" className="whitespace-no-wrap text-gray-600">
              &lt; Back to catalog
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-1/2 md:w-2/5 px-4">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-3/5 px-4 my-12">
            <h2 className="font-bold">{name}</h2>
            <h5 className="my-2 text-gray-600">{toDollars(price)}</h5>
            <p>{shortDescription}</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex-grow max-w-full flex-1 px-4">
            <p className="whitespace-pre-wrap">{longDescription}</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="border border-gray-300 rounded py-1 px-3 mx-10">
        Add to Cart
      </button>
    </div>
  );
}
