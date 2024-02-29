import { projects } from "../../../data/projects"
import { ProjectCard } from "./ProjectCard"
import style from "../styles.module.scss"

export const ProjectList = () => {
    return(
        <ul className={style.ul_projects}>
            {projects.map((project) => (
            <ProjectCard key={project.id} project={project}/>
            ))}
        </ul>
    )
}