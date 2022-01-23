import styles from "./CertTiles.module.scss";
import certList from "../../refs/certList";

//Tell webpack to require these files at compilation.
const requestImageFile = require.context("../../assets/tech", false, /.svg/);

export default function CertTiles() {
  return (
    <div className={styles.cert_container}>
      {certList.map((obj) => {
        return (
          <div className={styles.cert_tile} key={obj.title}>
            {/*             <div className={styles.cert_img_container}>
              <img
                src={requestImageFile(`./${obj.imgSrc}`).default}
                alt={`${obj.title} Logo`}
              />
            </div>
            <label>{obj.title}</label> */}
          </div>
        );
      })}
    </div>
  );
}
