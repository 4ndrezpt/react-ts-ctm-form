import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FieldProps, FormProps, PatternsProps } from "../interfaces/interfaces";

interface UseFormConfig {
  initialForm: FormProps;
  onHandleSave?: (values : FormProps) => void;
}

export const useForm = ({
  initialForm,
  onHandleSave
} : UseFormConfig) => {
  const [formState, setFormState] = useState(initialForm);

  //Some Validation patterns
  const patterns : PatternsProps = {
    name: /^[a-zA-ZÄ-ÿ\s]{3,60}$/,
    title: /^[a-zA-ZÄ-ÿ\s]{3,60}$/,
    description: /^[\s\S]{4,100}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password:  /^(?=.[A-Z])(?=.[a-z])(?=.[0-9])(?=.[#?!@$%^&*-]).{8,}$/,
    //email: /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+.(com|net|org)/,
    code: /^\d{3,14}/,
    document: /^\d{7,14}$/,
    phone: /^\d{7,14}$/,
    date: /^\d{4}(:|-)\d{2}/,
    hour: /^\d{2}:\d{2}\s?/,
    relevance: /\w/
  }
  const validateField = (arg : FieldProps , type:string): boolean | string => {
    let upper : RegExp = /[A-Z]/;
    let hasUpper = '';
    let regex : RegExp;
    if(type === "createdDate"){
      return true;
    }
    if(type.search(upper) > 0){
      //console.log(type.search(upper));

      hasUpper = type.slice(type.search(upper));
      //console.log(patterns[hasUpper.toLowerCase()])
      regex = patterns[hasUpper.toLowerCase() as keyof PatternsProps];
    }else{
      //console.log(patterns[type as keyof PatternsProps] );
      regex = patterns[type as keyof PatternsProps] ;
    }
    arg.value = arg.value ? arg.value.trim() : "";
    //console.log(patterns[type], type)
    if (arg.value === "") {
      return `${arg.value} is empty`
    } else {
      return regex.test(arg.value);
    }
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    let validation = validateField(formState[name as keyof FormProps], name);
    //console.log("validation: ", validation);
    let createdAt = new Date();
    console.log("createdAt: ", createdAt);
    setFormState({
      ...formState,
      [name]: {
        value : value,
        isValid : validation
      }
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({
      ...formState,
      //assign and id to the form (object)
      id: {value: uuidv4(), isValid: true}
    })
    onHandleSave?.({...formState});
  }


  return {
    formState,
    handleChange,
    handleSubmit
  }
}
