import React, { useState } from 'react'
import Textfeild from '../../components/Textfeild';
import { useNavigate, useParams } from 'react-router-dom';
import { LISTS_ROUTE } from '../../constants/routes';
export default function EditTask(props) {

  const navigate = useNavigate();
  const { listId, taskId } = useParams();
  const list = props.listData.find(
    (listItem) => listItem.id === parseInt(listId)
  );
  let task = list.tasks.find(
    (taskItem) => taskItem.id === parseInt(taskId)
  );
  const [selectedTask, setSelectedTask] = useState(task)
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedListData = props.listData.map((list) => {
      if (list.id === parseInt(listId)) {
        return {
          id: parseInt(listId),
          name: list.name,
          tasks: list.tasks.map((eachTask) => {
            if (eachTask.id === parseInt(taskId)) {
              return {
                id: parseInt(taskId),
                title: selectedTask
              }
            } else {
              return eachTask
            }
          })
        }
      }else{
        return list
      }
    })
    console.log(updatedListData)
    props.setListData(updatedListData);
    navigate(`${LISTS_ROUTE}/${list.id}`);

  }

  const EditTaskHandler = (event) => {
    setSelectedTask(event.target.value);
  };

  return (
    <div>
      <form className='form-container'>
        <h3 style={{ color: "white" }}>Add your New Task here</h3>
        <div className='input'>
          <Textfeild
            className='input-feild'
            label="Task Name"
            value={selectedTask.title}
            onChange={EditTaskHandler}
          />
          <div className='btn-container'>
            <button onClick={handleSubmit} className='submit'>
              Save
            </button>
            <button className='cancel'
              onClick={() => navigate(`${LISTS_ROUTE}/${list.id}`)}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}
