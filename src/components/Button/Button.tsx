import { ComponentPropsWithoutRef, ReactNode } from "react";
import { getClassNames } from "../../utils";
import "./styles.css";
import { Color, Size, Variant } from "./Button.types";

type Props = ComponentPropsWithoutRef<"button"> & {
   color?: Color;
   variant?: Variant;
   size?: Size;
   className?: string;
   children: ReactNode;
};

const Button = (props: Props) => {
   const { color = 'primary', variant = 'contained', size = 'medium', className = '', children } = props;
   const classNames = getClassNames('button', [`${variant}-${color}`, size], className);

   return (
      <button className={classNames}>
         {children}
      </button>
   );
}

export default Button