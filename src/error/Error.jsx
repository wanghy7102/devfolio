import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";

const Error = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="page">
      <div className="page__content">
        <Hero />
      </div>
    </div>
  );
};

export default Error;
