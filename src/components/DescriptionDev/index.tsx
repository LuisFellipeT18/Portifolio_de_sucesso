import style from "./styles.module.scss"

export const DescritionDev = () => {
    return(
        <div className={style.container}>
            <div className={style.container_division}>
                <div className={style.container_content}>
                    <h1 className={style.title_1}>Criando experiências por meio da tecnologia </h1>
                    <p className={style.paragraph}>Sou estudante de programação na Kenzie Academy Brasil,
                    participei de diversos projetos resolvendo problemas de
                    alto nível e desenvolvendo habilidades
                    </p>
                </div>
            </div>
        </div>
    )
}