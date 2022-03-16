import React, { useState } from 'react'

import NewList from "../containers/List/NewList";
import List from "../containers/List/List"
import NewTask from "../containers/Task/NewTask";
import Task from "../containers/Task/Task";
import EditTask from "../containers/Task/EditTask"
import { Routes, Route } from 'react-router-dom'
import { LISTS } from "../constants/lists";
import { LISTS_ROUTE, TASKS_ROUTE } from "../constants/routes";


export default function AppRoute() {
    const [listData, setListData] = useState(LISTS);

    return (
        <div>
            {/* <Routes>
                <Route path='/' element={< List list={TaskItem} setSelectedListId={setSelectedListId}/>} />
                <Route path="/newlist" element={<NewList onSaveListData={saveListData} id={TaskItem.length}/>} />
                <Route path="/tasks" element={<Task tasksData={TaskItem} selectedListId={selectedListId} setSelectedTask={setSelectedTask} />}/>
                <Route path="/newtask" element={<NewTask onSaveTaskData={saveTaskData} selectedListId={selectedListId} />}/>
                <Route path="/edit" element={<EditTask selectedTask={selectedTask} onSaveUpdatedTask={saveUpdatedTask} />}/>
            </Routes> */}
            <Routes>
          <Route path={LISTS_ROUTE} element={ <List listData={listData} setListData={setListData} />}></Route>
          <Route path={`${LISTS_ROUTE}/create`} element={ <NewList listData={listData} setListData={setListData} />}></Route>
          <Route path={`${LISTS_ROUTE}/:listId`} element={<Task listData={listData} />}></Route>
          <Route path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/create`} element={<NewTask listData={listData} setListData={setListData}   />}></Route>
          <Route path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/:taskId/edit`} element={<EditTask listData={listData} setListData={setListData}  />}></Route>

          <Route path='*' element={<div>404!Error. Page not found</div>}></Route>
        </Routes>
        </div>
    )
}
