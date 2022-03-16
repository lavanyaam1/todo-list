import React, { useState } from 'react';
import Textfeild from '../../components/Textfeild';
import { useNavigate } from "react-router-dom";
import { LISTS_ROUTE } from "../../constants/routes";
import "./styles/newList.css"

export default function NewList(props) {
    const navigate = useNavigate();
    const [enteredTitle, setEnteredTitle] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newListData = {
            id:props.listData.length+1,
            name: enteredTitle,
            tasks: []
        };
        props.setListData((prevState) => [...prevState,newListData])
        setEnteredTitle("");
        navigate(`${LISTS_ROUTE}`);
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    console.log(props.listData)
    return (
        <>
            <form className='form-container'>
                <h3 style={{color:"white"}}>Add your new list here</h3>
                <div className='input'>
                    <Textfeild 
                        className='input-feild'
                        label="List Name"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                    <div className='btn-container'>
                        <button onClick={handleSubmit} className='submit'>
                            Save
                        </button>
                        <button className='cancel'
                        onClick={() => navigate(`${LISTS_ROUTE}`)}>Cancel</button>
                    </div>
                </div>
            </form>
        </>
    )
}