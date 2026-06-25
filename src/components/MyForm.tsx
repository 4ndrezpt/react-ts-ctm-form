import { v4 as uuidv4 } from "uuid";
import { PrimaryButton } from "./ButtonBase";
import { useForm }  from "../hooks/useForm";
import { FormProps } from "../interfaces/interfaces";
import { MyFormProps } from "../interfaces/interfaces";


export const MyForm  = ( {className, onHandleSave}:MyFormProps) => {

  const initialForm : FormProps = {
    id : {value: uuidv4(), isValid: true},
    name : {value: "", isValid: null},
    email : {value: "", isValid: null}
  }

  const relevanceOptions : string[] = [
      'Important and Urgent',
      'Important',
      'Urgent',
      'not Urgent and not Important'
    ];

  const { formState, handleChange, handleSubmit} = useForm({initialForm, onHandleSave});
  const { id, name, email }: FormProps = formState;

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="main__form">
        <div className="main__form__header">
          <h4>FORM ID:</h4>
          <p>{ id.value }</p>
        </div>
        <div className="main__form__body">
          <fieldset>
            <legend>Task Information: </legend>
              <label htmlFor="name">Task Name: </label>
              <input type="text" id="name" name="name"
              value={name.value}
              onChange={handleChange}
              />
              {name.value == "" ? "" : name.isValid ? "":
                <p style={{ backgroundColor: "darkred" }}>This Element contain errors</p>}
              <label htmlFor="name">User Email: </label>
              <input type="email" id="email" name="email"
              value={email.value}
              onChange={handleChange}
              />
              {email.value == "" ? "": email.isValid ? "" :
                <p style={{ backgroundColor: "darkred" }}>This Element contain errors</p>}
              <label htmlFor="assignedEmail">Assigned Email: </label>
          </fieldset>
        </div>
        <div className="main__form__footer">
          <PrimaryButton
            label={"Submit"}
            className=""
          ></PrimaryButton>
        </div>

      </form>
    </div>
  );
}
