import { Home } from "lucide-react";

const ErrorPage = () => {
  return (
    <>
      <div className="error-page">
        {/* Background */}
        <div className="position-absolute w-100 h-100">
          <div className="gradient-overlay" />
        </div>

        {/* Main content */}
        <div
          className="position-relative text-center px-3"
        >
          {/* 404 */}
          <div className="mb-4">
            <div className="position-relative d-inline-block">
              <h1 className="display-error mb-0">404</h1>
            </div>
          </div>

          {/* Case badge */}
          <div className="mb-4">
            <span className="case-badge">NOT FOUND</span>
          </div>

          {/* Description */}
          <div className="mb-5">
            <p className="text-secondary mx-auto" style={{ maxWidth: 500 }}>
              Even the most thorough investigation sometimes leads to dead ends.
              This location has left no digital footprint in our database.
            </p>
          </div>

          {/* Buttons */}
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mb-5">
            <button
              className="btn-base btn-primary-custom"
              onClick={() => (window.location.href = "/")}
            >
              <Home size={18} />
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage
