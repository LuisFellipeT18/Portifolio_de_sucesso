import { DefaultTemplateProps } from "../../interfaces";
import { Footer } from "../Footer";
import { Header } from "../Header"

export const DefaultTemplate: React.FC<DefaultTemplateProps> = ({children}) => {
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
        
    )
}