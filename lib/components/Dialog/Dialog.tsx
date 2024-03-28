import { ElementType } from "react";
import { createPortal } from "react-dom";
import { PolymorphicProps, buttonEl, divEl, h1El } from "../../utils/type";
import useDialog from "./useDialog";

/************ Title ************/
type DialogTitleProps<E extends ElementType = typeof h1El> = PolymorphicProps<E>
function DialogTitle<T extends ElementType = typeof h1El>({
  as,
  children,
  ...props
}: DialogTitleProps<T>){
  const Component = as ?? h1El;
  return <Component {...props}>{children}</Component>
}

/************ Contents ************/
type DialogContentsProps<E extends ElementType = typeof divEl> = PolymorphicProps<E>
function DialogContents({
  as,
  children,
  ...props
}: DialogContentsProps){
  const Component = as ?? divEl;
  return <Component {...props}>{children}</Component>
}

/************ Button ************/
type DialogButtonProps<E extends ElementType = typeof buttonEl> =
  PolymorphicProps<E>
function DialogButton<T extends ElementType = typeof buttonEl>({
  as,
  children,
  ...props
}: DialogButtonProps<T>){
  const Component = as ?? buttonEl;
  return <Component {...props}>{children}</Component>
}

/************ Main ************/
type DialogMainProps<E extends ElementType = typeof divEl> =
  PolymorphicProps<E> & {
    isOpen: boolean;
  };

function DialogMain<T extends ElementType = typeof divEl>({
  as,
  isOpen,
  ...props
}: DialogMainProps<T>){
  const Component = as ?? divEl;

  if(!isOpen) return null;
  return createPortal(
    <Component {...props} />,
  document.body)
}

/************ Export ************/
export const Dialog = Object.assign(DialogMain, {
  Title: DialogTitle,
  Contents: DialogContents,
  Button: DialogButton,
  use: useDialog,
});

export type {
  DialogMainProps,
  DialogTitleProps,
  DialogContentsProps,
  DialogButtonProps,
};