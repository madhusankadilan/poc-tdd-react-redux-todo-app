import { ComponentPropsWithoutRef, ReactNode } from "react";
import { getClassNames } from "../_utils";
import { InputCol, LabelCol, Layout } from "./Form.types";
import "./styles.css";

type Props = ComponentPropsWithoutRef<"form"> & {
   layout?: Layout;
   labelCol?: LabelCol;
   inputCol?: InputCol;
   className?: string;
   children: ReactNode;
};

const Form = (props: Props) => {
   const { layout = 'vertical', labelCol = 1, inputCol = 9, className = '', children } = props;
   const classNames = getClassNames('form', [layout, `label-wrapper-col-${labelCol}`, `input-wrapper-col-${inputCol}`], className);

  return (
    <form  className={classNames}>{children}</form>
  )
}

export default Form