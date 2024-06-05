import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      <p>Product not found</p>
      <Link to="/" className="text-gray-700 cursor-pointer">
        Return to the Catalogue
      </Link>
    </>
  );
}
