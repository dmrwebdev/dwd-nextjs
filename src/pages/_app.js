import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../styles/globals.css";
import Layout from "../layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import index from "/src/styles/index.scss";
import { AppWrapper } from "../context/AppContext";

function App({ Component, pageProps }) {
  const [introOver, setIntroOver] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/") {
      setIntroOver(true);
    }
    // Only fire on first page load
  }, []);

  return (
    <AppWrapper>
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
    </AppWrapper>
  );
}

export default App;
