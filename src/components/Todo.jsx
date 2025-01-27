import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        // className={`${task.completed} ? 'completed' : ''`}
        className={task.completed ? "completed" : ""}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          onClick={() => editTodo(task.id)}
          icon={faPenToSquare}
          className="edit-icon"
        />
        <FontAwesomeIcon
          onClick={() => deleteTodo(task.id)}
          icon={faTrash}
          className="delete-icon"
        />
      </div>
    </div>
  );
};

export default Todo;
