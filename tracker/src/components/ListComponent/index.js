import React, { useState } from "react";
import List from './List'
import NewList from "./NewList";

export default function ListComponent() {
  const [taskList,setTaskList]=useState([])
const lists=[
  {
    title:"Meeting",
    description:"Learn React"
  },
  {
    title:"Play",
    description:"Play Badminton"
  },
  {
    title:"Movie",
    description:"Watch movie"
  }
];
const saveListData = (newListItem) => {
  setTaskList((prevState)=>[newListItem,...prevState])
};
  return (
    <>
      <List list={taskList}/>
      <NewList onSaveListData={saveListData} />
    </>
  )
}
