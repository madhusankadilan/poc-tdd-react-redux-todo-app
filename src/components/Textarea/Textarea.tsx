import { useId } from "react";
import { getClassNames } from "../_utils";
import { Color, Size, Variant } from "./Textarea.types";
import "./styles.css";

type Props = {
   color?: Color;
   variant?: Variant;
   size?: Size;
   textareaClassName?: string;
   labelClassName?: string;
   wrapperClassName?: string;
   labelWrapperClassName?: string;
   textareaWrapperClassName?: string;
   label?: string;
}

const Textarea = (props: Props) => {
   const { color = 'primary', variant = 'outlined', size = 'medium', textareaClassName = '', labelClassName = '',
      wrapperClassName = '', labelWrapperClassName = '', textareaWrapperClassName = '', ...rest } = props;
   const { label } = rest;

   const textareaClassNames = getClassNames('textarea', [`${variant}-${color}`, size], textareaClassName);
   const labelClassNames = getClassNames('label', [], labelClassName);
   const wrapperClassNames = getClassNames('wrapper', [], wrapperClassName);
   const labelWrapperClassNames = getClassNames('label-wrapper', [], labelWrapperClassName);
   const textareaWrapperClassNames = getClassNames('textarea-wrapper', [], textareaWrapperClassName);
   const id = useId();

   return (
      <div className={wrapperClassNames}>
         { label && (
            <div className={labelWrapperClassNames}>
               <label className={labelClassNames} htmlFor={id}>{label}</label>
            </div>
         )}
         <div className={textareaWrapperClassNames}>
            <textarea className={textareaClassNames} id={id} />
         </div>
      </div>
   );
}

export default Textarea;