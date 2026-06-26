export interface FieldProps {
  value : string;
  isValid : boolean | string | null;
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

export interface PatternsProps  {
  name : RegExp;
  title: RegExp;
  description: RegExp;
  email: RegExp;
  password: RegExp;
  code : RegExp;
  document: RegExp;
  phone: RegExp;
  date: RegExp;
  hour:  RegExp;
  relevance: RegExp;
}
