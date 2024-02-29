import { ToolsList } from "./ToolsList"
import style from "./styles.module.scss"


export const DominoTools = () => {
    return(
        
        <div className={style.container}>
            <div className={style.container_division}>
                <h2 className={style.title_1}>Ferramentas que domino</h2>
                <ToolsList/>
            </div>

        </div>
    )
}