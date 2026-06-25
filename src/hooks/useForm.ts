import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormProps } from "../interfaces/interfaces";

interface UseFormConfig {
  initialForm: FormProps;
  onHandleSave?: (values : FormProps) => void;
}

export const useForm = ({
  initialForm,
  onHandleSave
} : UseFormConfig) => {

  const [formState, setFormState] = useState(initialForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({
      ...formState,
      //assign and id to the form (object)
      id: {value: uuidv4(), isValid: true}
    })
    onHandleSave?.({...formState});
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: {
        value : value,
        isValid : true
      }
    });
  }
  return {
    formState,
    handleChange,
    handleSubmit
  }
}
