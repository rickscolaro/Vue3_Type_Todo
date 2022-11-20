import { TodoStatus, type Todo } from '@/types'
import { computed, reactive } from 'vue'

interface TodoStore {
  [TodoStatus.Pending]: Todo[]
  [TodoStatus.InProgress]: Todo[]
  [TodoStatus.Completed]: Todo[]
}

const defautVal = {
  [TodoStatus.Pending]: [
    {
      id: 1,
      title: 'Learmn Vuejs',
      description: 'Watch codepanion videos',
      status: TodoStatus.Pending,
    },
  ],
  [TodoStatus.InProgress]: [],
  [TodoStatus.Completed]: [],
}

const todoStore = reactive<TodoStore>(defautVal)

export default () => {
  const getTodoByStatus = (TodoStatus: TodoStatus) => {
    return computed(() => todoStore[TodoStatus])
  }

const updateTodo = (todo: Todo, newStatus: TodoStatus) => {
  todo.status = newStatus
}

  const addNewTodo = (todo: Todo) => {
    todoStore[todo.status].push(todo)
  }

  const deleteTodo = (todoDelete: Todo) => {
    todoStore[todoDelete.status] = todoStore[todoDelete.status].filter(
      (todo) => todo.id !== todoDelete.id
    )
  }

  return {
    getTodoByStatus,
    addNewTodo,
    deleteTodo,
    updateTodo
  }
}
