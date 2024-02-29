import { ToolsCardProps } from "../../../../interfaces";
import style from "../../styles.module.scss"

export const ToolCard: React.FC<ToolsCardProps> = ({ tool }) => {
    return (
      <li>
       <img className={style.technology} src={tool.img} />
      </li> 
    );
  };
  