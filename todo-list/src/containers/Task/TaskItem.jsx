import React from 'react'
import { useNavigate} from 'react-router-dom';
import { LISTS_ROUTE , TASKS_ROUTE } from '../../constants/routes';

export default function TaskItem(props) {
  const navigate = useNavigate();
  const addTaskHandler = () => {
    navigate(`${LISTS_ROUTE}/${props.listId}${TASKS_ROUTE}/${props.id}/edit`)
  }
  
  return (
    <>
      <table>
        <tr>
          <td>{props.task}</td>
          <td>
              <button onClick={addTaskHandler}>
                Edit Task
              </button>
          </td>
        </tr>
      </table>
    </>
  )
}