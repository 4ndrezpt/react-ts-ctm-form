import { useState, useEffect } from 'react';
import { FormProps } from "../interfaces/interfaces";
import { MyForm } from './MyForm';


export const ReceiverForm = () =>{
  const [tasks, setTasks] = useState< FormProps[] >();

  const addData = (newData:FormProps):void => {
    setTasks([...(tasks || []), newData]);
    console.log("Hook recivido:", newData);
  }

  return (<section className="section__and___container">
    <h2>Tasks Application</h2>
    <MyForm onHandleSave={addData} className="injector"></MyForm>
    <div className="viewer">
      <ul>
        {tasks?.map( (task) =>  (
          <div key={task.id.value}>
            <h4>{task.id.value}</h4>
            <p>Name: {task.name.value} </p>
            <a href="#">Email: {task.email.value}</a>
          </div>
          )
        )}
      </ul>

    </div>
  </section>);
}
