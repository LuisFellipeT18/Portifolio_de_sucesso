import React from 'react';
import { ProjectCardProps } from "../../../../interfaces"
import style from "../../styles.module.scss"

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return(
        <li>
            <div className={style.division_card}>
                <p className={style.title_project}>{project.name}</p>
                <div className={style.division_langage}>
                    <p className={style.paragraph_card}>Linguagens:</p>
                    <span className={style.space_language}>
                            {project.languages.map((language, index) => (
                        <span key={index}>
                                <span key={index} className={style.span_map}>{language}</span>
                        </span>
                        ))}
                    </span>
                </div>
                    <p className={style.paragraph_card}>{project.description}</p>
                    <div className={style.align_links}>
                        <a className={style.align_buttons} href="" target='blank'>
                        <img className={style.img_links} src="/github.png" alt="GitHub" title="GitHub"/>
                        <p>Github Code</p>
                        </a>
                        <a className={style.align_buttons} href="" target='blank'>
                            <img className={style.img_links} src="/aplicatio_icon.png" alt="GitHub" title="GitHub"/>
                            <p>Aplicação</p>
                        </a>
                    </div>
            </div>
        </li>
    )
}