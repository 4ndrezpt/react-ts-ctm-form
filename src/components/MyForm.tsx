import { v4 as uuidv4 } from "uuid";
import { PrimaryButton } from "./ButtonBase";
import { useForm }  from "../hooks/useForm";
import { FormProps } from "../interfaces/interfaces";
import { MyFormProps } from "../interfaces/interfaces";


export const MyForm  = ( {className, onHandleSave}:MyFormProps) => {

  const initialForm : FormProps = {
    id : {value: uuidv4(), isValid: true},
    title : {value: "", isValid: null},
    email : {value: "", isValid: null},
    assignedEmail: {value: "", isValid: null},
    relevance: {value: "", isValid: null},
    description: {value: "", isValid: null},
    deadlineDate: {value: "", isValid: null},
    createdDate: { value: (new Date()).toString(), isValid: true}
  }

  const relevanceOptions : string[] = [
      'Important and Urgent',
      'Important',
      'Urgent',
      'not Urgent and not Important'
    ];

  const { formState, handleChange, handleSubmit} = useForm({initialForm, onHandleSave});
  const { id, title, email, assignedEmail, relevance, description, deadlineDate, createdDate
  }: FormProps = formState;

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
              <input type="text" id="title" name="title"
              value={title.value}
              onChange={handleChange}
              />
              {title.value == "" ? "" : title.isValid ? "":
                <p style={{ backgroundColor: "darkred" }}>This Element contain errors</p>}
              <label htmlFor="name">User Email: </label>
              <input type="email" id="email" name="email"
              value={email.value}
              onChange={handleChange}
              />
              {email.value == "" ? "": email.isValid ? "" :
                <p style={{ backgroundColor: "darkred" }}>This Element contain errors</p>}
              <label htmlFor="assignedEmail">Assigned Email: </label>
              <input type="email" id="assignedEmail" name="assignedEmail"
              value={assignedEmail.value}
              onChange={handleChange}
              />
              {assignedEmail.value == "" ? "": assignedEmail.isValid ? "" :
                <p style={{ backgroundColor: "darkred" }}>This Element contain errors</p>}
          </fieldset>
          <fieldset>
            <legend>Relevance</legend>
              <label htmlFor="relevance">Relevance: </label>
              <select id="relevance" name="relevance"
                value={relevance.value}
                onChange={handleChange}
              >
                <option>--Select One --</option>
                {relevanceOptions.map(option => <option key={option} value={option}>{ option }</option>)}
              </select>
            <label htmlFor="description">Description: </label>
            <textarea id="description" name="description"
              value={description.value} onChange={ handleChange }
            ></textarea>
            <label htmlFor="description">Deadline: </label>
            <input type="date" id="deadlineDate" name="deadlineDate"
            value={deadlineDate.value} onChange={handleChange}/>
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
