import React from 'react';
import { ProjectCardProps } from "../../../../interfaces"
import style from "../../styles.module.scss"

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return(
        <li className={style.division_card}>
            <div>
                <p className={style.title_project}>{project.name}</p>
            </div>

            <div className={style.division_langage}>
                <p className={style.paragraph_language}>Linguagens:</p>
                    <span className={style.space_language}>
                            {project.languages.map((language, index) => (
                        <span key={index}>
                                <span key={index} className={style.span_map}>{language}</span>
                        </span>
                        ))}
                    </span>
            </div>

            <div className={style.paragraph_card_container}>
                <p className={style.paragraph_card}>{project.description}</p>
            </div>
                    
            <div className={style.align_links}>
                <a className={style.align_buttons} href={project.github}  target='blank'>
                    <img className={style.img_links} src="/github.png" alt="GitHub" title="GitHub"/>
                    <p>Github Code</p>
                </a>

                <a className={style.align_buttons} href={project.link_project} target='blank'>
                    <img className={style.img_links} src="/aplicatio_icon.png" alt="GitHub" title="GitHub"/>
                    <p>Aplicação</p>
                    </a>
                </div>
        </li>
    )
}