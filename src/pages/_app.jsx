import { WindowEffectsContext } from "@context/WindowEffectsContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <WindowEffectsContext>
      <Component {...pageProps} />
    </WindowEffectsContext>
  );
}
