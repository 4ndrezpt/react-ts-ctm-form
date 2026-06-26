import "../styles/ButtonBase.css";

interface ButtonBaseProps  {
  label : string;
  className?: string;
  onClick?: ()=>void | null;
  children?: React.ReactNode | null;
}

export const ButtonBase=(
  {label, className, onClick, children} : ButtonBaseProps
)=>{
  const ButtonBase = {
    label: label,
    className: className,
    onClick: onClick,
    children: children
  };

  return (
    <button className={`button ${ButtonBase.className}`.trim()}
      onClick={ButtonBase.onClick}
      >
      {ButtonBase.children || ButtonBase.label}
    </button>
  );
}

export const PrimaryButton = (props:ButtonBaseProps) =>{
  return (<ButtonBase {...props} className="button-primary info" />);
}
export const SecondaryButton = (props:ButtonBaseProps) =>{
  return (<ButtonBase {...props} className="button-secondary" />);
}
export const DangerButton = (props:ButtonBaseProps) =>{
  return (<ButtonBase {...props} className="button-danger danger" />);
}
export const OutlinedButton = (props:ButtonBaseProps) =>{
  return (<ButtonBase {...props} className="button-outlined" />);
}
export const RoundedButton  = (props:ButtonBaseProps) =>{
  return (<ButtonBase {...props} className="button-rounded" />);
}
