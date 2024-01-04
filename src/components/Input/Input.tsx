import { useId } from "react";
import { getClassNames } from "../../utils";
import { Color, Size, Variant } from "./Input.types";
import "./styles.css";

type Props = {
   color?: Color;
   variant?: Variant;
   size?: Size;
   inputClassName?: string;
   labelClassName?: string;
   wrapperClassName?: string;
   labelWrapperClassName?: string;
   inputWrapperClassName?: string;
   label?: string;
}

const Input = (props: Props) => {
   const { color = 'primary', variant = 'outlined', size = 'medium', inputClassName = '', labelClassName = '',
      wrapperClassName = '', labelWrapperClassName = '', inputWrapperClassName = '', ...rest } = props;
   const { label } = rest;

   const inputClassNames = getClassNames('input', [`${variant}-${color}`, size], inputClassName);
   const labelClassNames = getClassNames('label', [], labelClassName);
   const wrapperClassNames = getClassNames('wrapper', [], wrapperClassName);
   const labelWrapperClassNames = getClassNames('label-wrapper', [], labelWrapperClassName);
   const inputWrapperClassNames = getClassNames('input-wrapper', [], inputWrapperClassName);
   const id = useId();

   return (
      <div className={wrapperClassNames}>
         { label && (
            <div className={labelWrapperClassNames}>
               <label className={labelClassNames} htmlFor={id}>{label}</label>
            </div>
         )}
         <div className={inputWrapperClassNames}>
            <input className={inputClassNames} id={id} />
         </div>
      </div>
   );
}

export default Input;