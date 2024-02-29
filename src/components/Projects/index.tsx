import { ProjectList } from "./ProjectsList"
import style from "./styles.module.scss"

export const Projects = () => {
    return(
        <div className={style.container_division}>
            <ProjectList />
        </div>
    )
}