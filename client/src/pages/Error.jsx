// src/pages/Error.jsx
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="text-center py-5 text-light">
      <h1>404</h1>
      <p>The truth you are looking for is not here.</p>
      <Link to="/" className="btn btn-primary">Return Home</Link>
    </div>
  );
}