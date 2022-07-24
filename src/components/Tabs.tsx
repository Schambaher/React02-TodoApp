import { Link, NavLink } from "react-router-dom"

export const Tabs = () => {
    return (
        
        <div className="tab">
            <NavLink className={({isActive}) => isActive ? "tab-element activo" : "tab-element"} to={'/'}>
                <span><i className="fa-solid fa-list"></i></span>
                <span>Tareas</span>
            </NavLink>

            <NavLink className={({isActive}) => isActive ? "tab-element activo" : "tab-element"} to={'/form'}>
                <span><i className="fa-solid fa-plus"></i></span>
                <span>Agregar nueva tarea</span>
            </NavLink>
        </div>
        
    )
}
