import { SyntheticEvent } from "react";
import { useForm } from "../hooks/useForm";

import {Todo} from '../interfaces/TodoInterface';

export const Form = () => {

    const {handleInputChange, reset, formValues} = useForm<Todo>({
        tarea: '',
        descripcion: '',
        fechaLimite: new Date("yyyy-MM-dd").toString(),
        horaLimite: new Date("HH:mm").toString()
    })

    const { tarea, descripcion, fechaLimite, horaLimite } = formValues;

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (tarea.length < 1 || descripcion.length < 1 || fechaLimite.length < 1 || horaLimite.length < 1) {
            return;
        }
        console.log(formValues);
        reset();
    }

    return (
        <form
            onSubmit={handleSubmit} 
            className="form">
            <div className="form-input">
                <label className="form-input-label">Tarea: </label>
                <input 
                    className="form-input-item" 
                    type="text"
                    name="tarea"
                    onChange={handleInputChange}
                    value={tarea}
                />
            </div>
            <div className="form-input">
                <label className="form-input-label">Descripción: </label>
                <textarea 
                    className="form-input-item form-textarea"
                    name="descripcion"
                    onChange={handleInputChange}
                    value={descripcion}
                ></textarea>
            </div>
            <div className="form-input">
                <label className="form-input-label">Fecha límite: </label>
                <input 
                    className="form-input-item" 
                    type="date"
                    name="fechaLimite"
                    onChange={handleInputChange}
                    value={fechaLimite}
                />
            </div>

            <div className="form-input">
                <label className="form-input-label">Hora límite: </label>
                <input 
                    className="form-input-item" 
                    type="time"
                    name="horaLimite"
                    onChange={handleInputChange}
                    value={horaLimite}
                />
            </div>
            <button
                className="form-button" 
                type="submit"
            >
                Agregar tarea
            </button>
        </form>
    );
}
