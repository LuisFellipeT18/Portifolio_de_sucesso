import { Route, Routes } from "react-router-dom"
import { Home } from "../page/Home"
import { ErrorPage } from "../page/ErrorPage"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage/>} />   
        </Routes>
    )
}