import styles from "./ProjectTiles.module.scss";
import projectsList from "../../refs/projectsList";
import linkIcon from "../../assets/project_icons/link.svg";
import githubIcon from "../../assets/project_icons/github.svg";

export default function ProjectTiles() {
  return (
    <div className={styles.project_tile_container}>
      {projectsList.map((obj, i) => {
        return (
          <div className={styles.project_tile} key={i}>
            {/*             <div className={styles.project_tech_links}>
              <a href={obj.projectURL}>
                <img src={linkIcon} alt="Project Link" />
              </a>
              <a href={obj.githubURL}>
                <img src={githubIcon} alt="Github Link" />
              </a>
            </div>
            <div className={styles.project_preview}>
              <img src={obj.previewURL} alt="Project Preview" />
            </div>
            <div className={styles.project_description}>
              <p>{obj.description}</p>
            </div>
            <div className={styles.project_tech}>{obj.tech.join(", ")}</div> */}
          </div>
        );
      })}
    </div>
  );
}
