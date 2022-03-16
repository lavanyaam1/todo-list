import React from 'react'
import TaskItem from './TaskItem'
import { useNavigate,useParams } from 'react-router-dom';
import { LISTS_ROUTE , TASKS_ROUTE} from '../../constants/routes';
import "./styles/task.css"

export default function Task(props) {
    const tasksDetails = props.listData;
    console.log("task pagr");
    console.log(tasksDetails)
    const navigate = useNavigate();
   const {listId} = useParams();
   
    return (
        <div className='task-container'>
            <div className='task-header'>
            <button onClick={()=>navigate(`${LISTS_ROUTE}`)}>Back</button>
            <button className='createtask-btn' onClick={()=> navigate(`${LISTS_ROUTE}/${listId}${TASKS_ROUTE}/create`)}>Create Task</button>
            </div>
            <main className='taskMain'>
            <p className='taskText'>Your Task</p>
            <div className='task'>
                {
                    tasksDetails.map((list) => (
                        list.id === parseInt(listId) &&
                        list.tasks.map((eachTask) => {
                            return <TaskItem
                                key={eachTask.id}
                                id={eachTask.id}
                                task={eachTask.title}
                                listId={parseInt(listId)}
                            />
                        })
                    ))
                }
            </div>
            </main>
        </div>
    )
}