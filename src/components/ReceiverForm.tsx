import { useState, useEffect } from 'react';
import { FormProps } from "../interfaces/interfaces";
import { MyForm } from './MyForm';
import "../styles/HalfListCards.css";
import { Card } from "./Card";
import { Modal } from "./Modal";


export const ReceiverForm = () =>{
  const savedTasks = localStorage.getItem("tasks");
  let initialTasks : FormProps[]= savedTasks ? JSON.parse(savedTasks) : [];
  const [tasks, setTasks] = useState< FormProps[]>(initialTasks);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [deleteSelected, setDeleteSelected] = useState<string | null>(null);

  const addData = (newData:FormProps):void => {
    setTasks([...(tasks || []), newData]);
    //console.log("Hook recivido:", newData);
  }
  const onOpenModal = (id: string):void => {
    setDeleteSelected(id);
    setModalOpen(true);
    //console.log(deleteSelected);
  }
  const confirmDelete = ()=> {
    const remainTasks : FormProps[] = tasks.filter(task=> task.id.value !==  deleteSelected);
    setTasks(remainTasks);
    setModalOpen(false);
  }

  useEffect(()=>{
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }catch(error){
      console.log(`Error setting localStorage key ${"tasks"}`, error);
    }
  },[tasks])

  return (
    <section>
      {
        modalOpen ? <div className="dialog__wrapper">
          <div className="dialog__difuser"></div>
          <Modal
            title="Modal From Budget App"
            content={`Are you sure you want to delete this Budget Track?`}
            onCancel={()=>setModalOpen(false)}
            onConfirm={confirmDelete}
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
          {
            tasks?.map( (task) =>  (
            <Card key={task.id.value}
              className="info"
              actionItem={()=>onOpenModal(task.id.value)}
              onConfirm={ confirmDelete }
              actionLabel="Delete"
              subject={task}>
                <p><strong>Assigned to: </strong>{task.email.value} </p>
                <p><strong>Assigned to: </strong>{task.assignedEmail.value} </p>
                <p><strong>Description: </strong>{task.description.value} </p>
                <p><strong>Deadline: </strong>{task.deadlineDate.value} </p>
            </Card>
            ))
          }
      </div>
        }

    </div>
    </section>
</section>
  );
}
