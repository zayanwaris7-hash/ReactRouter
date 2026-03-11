import { useRouteError, useNavigate } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate(); // Faster, smoother navigation
  console.error(error);

  return (
    <div id="error-page" style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p style={{ color: 'red' }}>
        <i>{error.statusText || error.message}</i>
      </p>
      {/* Navigate without a full page refresh */}
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}