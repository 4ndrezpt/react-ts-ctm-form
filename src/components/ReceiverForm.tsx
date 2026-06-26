import { useState, useEffect } from 'react';
import { FormProps } from "../interfaces/interfaces";
import { MyForm } from './MyForm';
import "../styles/HalfListCards.css";
import { Card } from "./Card";
import { Modal } from "./Modal";


export const ReceiverForm = () =>{
  const savedTasks = localStorage.getItem("tasks-blt");
  let initialTasks : FormProps[]= savedTasks ? JSON.parse(savedTasks) : [];
  const [tasks, setTasks] = useState< FormProps[]>(initialTasks);
  const [modalOpen, setModalOpen] = useState<boolean>(true);

  const addData = (newData:FormProps):void => {
    setTasks([...(tasks || []), newData]);
    console.log("Hook recivido:", newData);
  }
  const onOpenModal = ():void => {
    setModalOpen(true);
  }
  const modalConfirmDelete = ()=> {

  }

  /*

  useEffect(()=>{

  },[])
  */

  return (
    <section>
      {
        modalOpen ? <div className="dialog__wrapper">
          <div className="dialog__difuser"></div>
          <Modal
            title="Modal From Budget App"
            content={`Are you sure you want to delete this Budget Track?`}
            onCancel={()=>setModalOpen(false)}
            onConfirm={modalConfirmDelete}
            ctaPrimary={"Delete"}
            ctaOutlined={"Close"}
            className="danger"
          ></Modal>
        </div>
           : ""
      }
    <section className="section__and__container">
      <MyForm onHandleSave={addData} className="injector">

      </MyForm>
      <div className="viewer">
        {
        <div className="half-list">
          {tasks?.map( (task) =>  (
            <Card key={task.id.value}
              className="info"
              actionItem={onOpenModal}
              actionLabel="Delete"
              subject={task}>
                <h4>{task.id.value}</h4>
                <p>Name: {task.name.value} </p>
                <a href="#">Email: {task.email.value}</a>
            </Card>
            )
          )}
      </div>
        }

    </div>
    </section>
</section>
  );
}
