import { Projects } from "../components/Projects"
import style from "./styles.module.scss"

export const DashBoard = () => {
    return(
        <main className={style.container}>
            <div className={style.division_dash}>
                    <div className={style.division_paragraph}>
                        <h3>Vamos trocar uma idéia?</h3>

                        <p className={style.paragraph_description}>No linkedIn sempre estou 
                            <span className={style.span_description}> compartilhando </span>
                            meus processos diários para desenvolver
                            esses projetos e estou disposto a trocar algumas ideias por lá
                        </p>

                       
                            <a className="btn" href="https://www.linkedin.com/in/luis-fellipe-ferraz-garcia-186005115/" target="_blank">
                            Acessar perfil no Linkedin
                            </a>
                    
                    </div>

                    <div className={style.division_projects}>
                        <div className={style.division_title}>
                            <h3 className={style.projects}>Projetos</h3>
                            <h2>Originalidade e <span className={style.span_card}>dedicação</span> em cada detalhe</h2>
                        </div>
                        <Projects/>
                    </div>
                </div>
        </main>
    )
}