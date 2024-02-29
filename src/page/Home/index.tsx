import { DashBoard } from "../../DashBoard"
import { DescritionDev } from "../../components/DescriptionDev"
import { DominoTools } from "../../components/DominoTools"

export const Home = () => {
    return(
        <div>
          <DescritionDev/>
          <DominoTools/>
          <DashBoard/>    
       </div>
    )
}