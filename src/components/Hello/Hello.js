import { useState, useEffect } from "react";
import styles from "./Hello.module.scss";
/* import "../../fonts/Oxygen/Oxygen-Regular.ttf"; */

export default function Hello() {
  /*  const [loaded, setloaded] = useState(false);
  useEffect(() => {
    setloaded(true);
  }, []);
 */
  return (
    <div className={styles.hello_container}>
      <span className={styles.subhead}>Hey there,</span>
      <h1>
        <br />
        {`I'm Derek!`} <span className={styles.handwave_anim}>👋</span>
      </h1>
      <p>I like to build websites and other neat things.</p>
    </div>
  );
}
