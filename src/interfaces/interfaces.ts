export interface FieldProps {
  value : string;
  isValid : boolean | null;
}

export interface FormProps {
  id : FieldProps;
  name : FieldProps;
  email : FieldProps;
  assignedEmail: FieldProps;
}

export interface MyFormProps {
  className : string;
  onHandleSave?: (values : FormProps) => void;
}
