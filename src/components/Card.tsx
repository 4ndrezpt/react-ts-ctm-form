import { ButtonBase, PrimaryButton, DangerButton, OutlinedButton } from "./ButtonBase";
import "../styles/Card.css";
import { FormProps } from "../interfaces/interfaces";


interface CardProps {
  subject : FormProps;
  onOpenModal?: ()=>void;
  actionItem?: ()=>void;
  actionLabel: string;
  onCancel?:  ()=> void;
  className: string;
  children: React.ReactNode;
}

export const Card = (
  {subject, onOpenModal, actionItem,actionLabel, onCancel, className,children}
  : CardProps)=>{
  return (
    <div className={`Card__container ${className}`}>
      <div className="Card__header">
        <input type="checkbox" />
        {<h4>{subject.name.value}</h4>}
      </div>
      <div className="Card__body">
        {children ? children : <p>"No children to show here"</p>}
        <p></p>
      </div>
      <div className="Card__footer">
        <OutlinedButton
          label="Cancel"
          className="outlined"
          onClick={onCancel}
        ></OutlinedButton>
        <DangerButton
          label={actionLabel}
          className="outlined"
          onClick={actionItem}
        >
        </DangerButton>
      </div>
    </div>
  );
}
/*
export const ImageCard = ({imageUrl, altText})=>{
  return (
    <Card>
      <img src={imageUrl} alt={altText} />
      //{ baseProps rendered here}
    </Card>
  );
}

export const CheckCard = ({subject, onOpenModal, deleteItem}) => {
    return (
      <Card
        subject={subject}
        openOpenModal={onOpenModal}
        delteItem={delteItem}
      >

      </Card>
    );
  }
export const CollapsableCard = ({subject, onOpenModal, deleteItem}) => {
  return (
    <Card
      subject={subject}
      openOpenModal={onOpenModal}
      delteItem={delteItem}
    >

    </Card>
  );
}
*/
