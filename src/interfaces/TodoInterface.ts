export interface TodoList {
    todoList: Todo;
}

export interface Todo {
    tarea: string;
    descripcion: string;
    fechaLimite: string;
    horaLimite: string;
}