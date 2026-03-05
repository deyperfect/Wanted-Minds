import { Home } from "lucide-react";

export default function ErrorPage() {
  return (
    <>
      <style>{`
        .error-page {
          min-height: 100vh;
          background: black;
          color: white;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }


        .gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, black, rgba(0,0,0,0.9), black);
        }




        .display-error {
          font-size: clamp(6rem, 18vw, 12rem);
          line-height: 1;
          font-weight: 900;
          background: linear-gradient(to bottom, #e4e4e7, #52525b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }


        .case-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: rgba(127, 29, 29, 0.3);
          border: 1px solid rgba(153, 27, 27, 0.5);
          border-radius: 6px;
          color: #fca5a5;
          font-size: 0.875rem;
          letter-spacing: 0.05em;
        }

        .btn-base {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 2rem;
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          transition: background 0.25s, box-shadow 0.25s, border-color 0.25s;
          min-width: 180px;
          justify-content: center;
        }
        .btn-primary-custom {
          background: white;
          color: black;
          box-shadow: 0 4px 20px rgba(255,255,255,0.15);
        }
        .btn-primary-custom:hover {
          background: #e4e4e7;
          box-shadow: 0 4px 28px rgba(255,255,255,0.25);
        }
        .btn-outline-custom {
          background: transparent;
          color: white;
          border: 1px solid #3f3f46;
        }
        .btn-outline-custom:hover {
          background: #18181b;
          border-color: #52525b;
          color: white;
        }


      `}</style>

      <div className="error-page">
        {/* Background */}
        <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
          <div className="gradient-overlay" />
        </div>

        {/* Main content */}
        <div
          className="position-relative text-center px-3"
          style={{ zIndex: 2, maxWidth: 900 }}
        >
          {/* 404 */}
          <div className="mb-4 anim-fade-scale">
            <div className="position-relative d-inline-block">
              <h1 className="display-error mb-0">404</h1>
            </div>
          </div>

          {/* Case badge */}
          <div className="mb-4 anim-fade-in">
            <span className="case-badge">CASE FILE NOT FOUND</span>
          </div>

          {/* Description */}
          <div className="mb-5 anim-fade-up">
            <p className="text-secondary mx-auto" style={{ maxWidth: 500 }}>
              Even the most thorough investigation sometimes leads to dead ends.
              This location has left no digital footprint in our database.
            </p>
          </div>

          {/* Buttons */}
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mb-5 anim-fade-up-2">
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
