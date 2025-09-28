import { useEffect } from "react";

function Redirect() {
  useEffect(() => {
    window.location.href = "https://tonymac129.github.io/pagenotfound";
  }, []);

  return <div>Redirecting...</div>;
}

export default Redirect;
