import { useId } from "react";
import { getClassNames } from "../../utils";
import { Color, Size, Variant } from "./Input.types";

type Props = {
   color?: Color;
   variant?: Variant;
   size?: Size;
   className?: string;
   label?: string;
}

const Input = (props: Props) => {
   const { color = 'primary', variant = 'outlined', size = 'medium', className = '', ...rest } = props;
   const { label } = rest;
   const classNames = getClassNames('input', [`${variant}-${color}`, size], className);
   const id = useId();

   return (
      <div>
         { label && <label htmlFor={id}>{label}</label>}
         <input className={classNames} id={id} />
      </div>
   );
}

export default Input;