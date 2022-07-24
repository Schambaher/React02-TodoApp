import { useState } from "react"

export const TodoItem = () => {

    return (
        <>
            <div className="accordion-item">
                <header className="accordion-header">
                    <i className="fa-solid fa-caret-down"></i>
                    <h2 className="accordion-title">Estudiar Nodejs con Express y axiosjs</h2>
                    <i className="fa-solid fa-ellipsis"></i>
                </header>
                <div className="accordion-body">
                    <p className="accordion-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa amet maiores ratione delectus. Magni at dolore consequatur ipsum rem.
                    </p>
                    <div className="accordion-time">
                        <p className="accordion-date">Domingo, 10 de julio del 2022.</p>
                        <p className="accordion-date">11:49 am.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
