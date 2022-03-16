import React, { useState } from 'react'
import Textfeild from '../../components/Textfeild';
import { useNavigate, useParams } from 'react-router-dom';
import { LISTS_ROUTE } from '../../constants/routes';

export default function NewTask(props) {
    const navigate = useNavigate();
    const { listId } = useParams();
    const [enteredTask, setEnteredTask] = useState()

    const submitHandler = (e) => {
        e.preventDefault();
        const modifiedList = props.listData.map(list => ((list.id === parseInt(listId))?{...list,tasks:[...list.tasks , { id: list.tasks.length + 1, title: enteredTask }]}:list));
        props.setListData(modifiedList)
        console.log(props.listData)
        setEnteredTask("");
        navigate(`${LISTS_ROUTE}/${listId}`);
    }

    const taskChangeHandler = (event) => {
        setEnteredTask(event.target.value);
    };
    return (
        <>
            <form className='form-container'>
                <h3 style={{ color: "white" }}>Add your New Task here</h3>
                <div className='input'>
                    <Textfeild
                        className='input-feild'
                        label="Task Name"
                        value={enteredTask}
                        onChange={taskChangeHandler}
                    />
                    <div className='btn-container'>
                        <button onClick={submitHandler} className='submit'>
                            Save
                        </button>
                        <button className='cancel'>
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
