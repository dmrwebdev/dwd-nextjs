import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../styles/globals.css";
import Layout from "../layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [introOver, setIntroOver] = useState(true);

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const router = useRouter();

  useEffect(() => {
    console.log(introOver);
    if (router.pathname !== "/") {
      setIntroOver(true);
    }
    // Only fire on first page load
  }, []);

  return (
    <Layout
      introOver={introOver}
      prevScrollPos={prevScrollPos}
      setPrevScrollPos={setPrevScrollPos}
    >
      <Component
        {...pageProps}
        introOver={introOver}
        setIntroOver={setIntroOver}
        prevScrollPos={prevScrollPos}
      />
    </Layout>
  );
}

export default MyApp;
