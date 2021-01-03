const ADD_TODO = "TODO/ADD_TODO"
const DELETE_TODO = "TODO/DELETE_TODO"
const PUT_TODO = "TODO/PUT_TODO"

export type TTodo = {
    id: number
    completed: boolean
    description: string
    startedAt?: string
    completeBefore?: string
}
export type TTodos = Array<TTodo>
const defaultState = {
    todos: [
        {
            id: 1,
            completed: false,
            description: "first todo ",
            startedAt: "20/10/2021",
            completeBefore: "25/10/2021"
        },
        {
            id: 2,
            completed: false,
            description: "second todo",
            startedAt: "26/10/2021",
            completeBefore: "27/10/2021"
        },
        {
            id: 3,
            completed: false,
            description: "third todo",
            startedAt: "01/11/2021",
            completeBefore: "06/11/2021"
        },
        {
            id: 4,
            completed: false,
            description: "fourth todo",
            startedAt: "12/10/2021",
            completeBefore: "19/11/2021"
        },
        {
            id: 5, completed:
                false,
            description: "fifth todo",
            startedAt: "22/11/2021",
            completeBefore: "27/11/2021"
        },
    ] as TTodos
}

export type TTodosState = typeof defaultState

export type TTodosActions = ReturnType<TaddTodo> | ReturnType<TdeleteTodo> | ReturnType<TputTodo>

export const todoReducer = (state = defaultState, action: TTodosActions): TTodosState => {
    const getCopy = (orig: any) => JSON.parse(JSON.stringify(orig))
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        }
        case DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        }
        case PUT_TODO: {
            let todosCopy = getCopy(state.todos) as TTodos
            todosCopy.map(todo => {
                if (todo.id === action.newTodo.id) Object.assign(todo, action.newTodo)
            })
            return {
                ...state,
                todos: todosCopy
            }
        }
        default:
            return state
    }
}

export type TaddTodo = typeof addTodo
export type TdeleteTodo = typeof deleteTodo
export type TputTodo = typeof putTodo

export const addTodo = (todo: TTodo) => ({type: ADD_TODO, todo} as const)
export const deleteTodo = (id: number) => ({type: DELETE_TODO, id} as const)
export const putTodo = (newTodo: TTodo) => ({type: PUT_TODO, newTodo} as const)
