import React, { useState, useEffect } from "react";
import Header from "./pages/Header";
import MainSection from "./pages/MainSection";
import Footer from "./pages/Footer";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
