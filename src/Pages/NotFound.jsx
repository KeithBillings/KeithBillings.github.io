import { Link } from "react-router-dom";

// 404 page for any route that doesn't match
export default function NotFound() {
  return (
    <div className="not-found">
      {/* React 19 hoists these into <head>; noindex keeps search engines from indexing unknown URLs as real pages */}
      <title>404 - Page not found | Keith Billings</title>
      <meta name="robots" content="noindex" />

      <h1 className="not-found__title">{"{404}"}</h1>
      <p className="not-found__description">Oops! The page you're looking for doesn't exist. Please check the URL and try again.</p>
      <Link to="/" className="not-found__link">
        Go back to the homepage
      </Link>
    </div>
  );
}
