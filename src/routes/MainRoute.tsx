import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Tabs } from "../components/Tabs"
import { FormTab } from "../tabs/FormTab"
import { TodoTab } from "../tabs/TodoTab"


export const MainRoute = () => {
    return (
        
        <BrowserRouter>
            <div className="container">
                <div className="todo-app">
                    <Tabs />
                    <Routes>
                        <Route path="/" element={ <TodoTab /> } />
                        <Route path="form" element={ <FormTab /> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    )
}
