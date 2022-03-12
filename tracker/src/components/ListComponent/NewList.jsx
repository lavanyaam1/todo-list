import React, { useState } from 'react';


export default function NewList(props) {
  const [enteredTitle, setEnteredTitle] = useState()
  const [enteredDescription, setEnteredDescription] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    const newListData = {
      title: enteredTitle,
      description: enteredDescription,
    };
    props.onSaveListData(newListData);
    setEnteredTitle("");
    setEnteredDescription("");
  }
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={titleChangeHandler}
            type="text" />
        </div>
        <br />
        <div>
          <label>Description</label>
          <input
            value={enteredDescription}
            onChange={descriptionChangeHandler}
            type="text" />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}