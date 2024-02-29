import { tools } from "../../../data/tools";
import { ToolCard } from "./ToolCard";
import style from "../styles.module.scss"

export const ToolsList = () => {
    return (
      <ul className={style.div_tecnologies}>
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </ul>
    );
  };
  