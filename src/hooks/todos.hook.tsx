import { useState } from "react"
import { ITodo, IComment } from '../interfaces';

function useTodos() {
  const [todos, setTodos] = useState([] as ITodo[])

  const handleDeleteTodo = (id: number) => {
    setTodos(
      todos.filter((todo: ITodo) => {
        if (todo.key !== id) return true
      })
    )
  }
  const addCommentToTodo = (id: number, comment: IComment) => {
    setTodos(
      todos.map((todo: ITodo) => {
        if (todo.key === id) {
          todo.comments.push(comment)
        }
        return todo
      })
    )
  }
  const addAnswerToTodo = (id: number, commentId: number, comment: IComment) => {
    setTodos(
      todos.map((todo: ITodo) => {
        if (todo.key === id) {
          for(let i = 0; i < todo.comments.length; i++){
            if(todo.comments[i].id === commentId){
              todo.comments[i].answers.push(comment)
              break;
            }
          }
        }
        return todo
      })
    )
  }
  const removeCommentFromTodo = (id: number, commentId: number) => {
    setTodos(
      todos.map((todo: ITodo) => {
        if (todo.key === id) {
          console.log(todo.key, id, commentId)
            todo.comments.splice(0, todo.comments.length, ...todo.comments.filter((item: IComment) => item.id !== commentId));
        }
        return todo
      })
    )
  }

  const removeAnswerFromTodo = (id: number, commentId: number, answerCommentId: number | undefined) => {
    setTodos(
      todos.map((todo: ITodo) => {
        if (todo.key === id) {
            const comments: IComment = todo.comments.filter((comment: IComment) => {
              if (comment.id === answerCommentId) return true
            })[0]
            comments.answers.splice(0, comments.answers.length, ...comments.answers.filter((item: IComment) => item.id !== commentId));
        }
        return todo
      })
    )
  }
  return {
    todos,
    setTodos,
    removeAnswerFromTodo,
    removeCommentFromTodo,
    addAnswerToTodo,
    addCommentToTodo,
    handleDeleteTodo
  }
}

export default useTodos;