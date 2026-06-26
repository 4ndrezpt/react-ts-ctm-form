import { PrimaryButton, OutlinedButton, DangerButton, RoundedButton } from "./ButtonBase";
import "../styles/Modal.css";

interface ModalProps {
  children?: React.ReactNode;
  title?: string;
  className: string;
  ctaOutlined: string;
  ctaPrimary: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Modal = ({
  children, title,
  className,
  ctaOutlined="Cancel",
  ctaPrimary="Delete",
  onConfirm,
  content,
  onCancel
}: ModalProps) =>{

    return (
    <div>
      <div className={`Modal__container`}>
        <div className={`Modal__header ${className}`}>
          <h4>{ title }</h4>
          <RoundedButton onClick={onCancel}
            label="&times;"
            className="outlined-button"
          >Close</RoundedButton>
        </div>
        <div className="Modal__body">
          { children && children }
          { content && <p>{content}</p> }
        </div>
        <div className="Modal__footer">
          <OutlinedButton label="Cancel"
          onClick={ onCancel } ></OutlinedButton>
          {
            className == "danger" ?
            <DangerButton className="button-danger"
            label={ ctaPrimary }
            onClick={ onConfirm }
            ></DangerButton> :
            <PrimaryButton
              className="button-danger"
              label={ ctaPrimary }
              onClick={ onConfirm }
            ></PrimaryButton>
          }

        </div>
      </div>
    </div>
  );
}
/*
export const ErrorModal = (
  {
    children, title,
    className,
    ctaOutlined,
    ctaPrimary,
    onConfirm,
    content,
    onCancel }:ModalProps)=>{
  return (
    <div>
      <div className={`Modal__container`}>
        <div className={`Modal__header ${className}`}>
          <h4>{ title }</h4>
          <RoundedButton onClick={onCancel} label="&times;"
          ></RoundedButton>
        </div>
        <div className="Modal__body">
          Error: {content && content }
        </div>
        <div className="Modal__footer">
          <DangerButton className={className} label="Delete"
            >Close</DangerButton>
        </div>
      </div>
    </div>
  );
}
*/
