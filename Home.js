import React, { useEffect, useState } from "react";
import AnimationOpening from "./AnimationOpening";
import Header from "./Header";
import SignupModal from "./SignupModal";
import ProductList from './ProductList';
import Footer from "./Footer";
import Discover from "./Discover";

function Home({ setRoute }) {
  const [showAnimation, setShowAnimation] = useState(true);
  const [signedUp, setSignedUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showAnimation && <AnimationOpening />}
      {!showAnimation && (
        <>
          <Header setRoute={setRoute} />
          {!signedUp && <SignupModal setSignedUp={setSignedUp} />}
          {signedUp ? <ProductList /> : <Discover />}
          <Footer setRoute={setRoute} />
        </>
      )}
    </div>
  );
}

export default Home;