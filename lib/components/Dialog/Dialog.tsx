import { ElementType, ForwardRefExoticComponent, forwardRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { PolymorphicProps, buttonEl, divEl, h1El } from "../../utils/type";
import useDialog from "./useDialog";
import Keyboard from "../Keyboard/Keyboard";

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
  PolymorphicProps<E> & ReturnType<typeof useDialog>

function DialogMain<T extends ElementType = typeof divEl>(
  { as, isOpen, open, close, children, ...props }: DialogMainProps<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) {
  const Component = as ?? divEl;

  useEffect(() => {
    ref?.current.focus();
  }, []);

  if (!isOpen) return null;

  return createPortal(
    <Keyboard.Escape then={close}>
      <Component {...props} ref={ref} tabIndex={-1}>
        {children}
      </Component>
    </Keyboard.Escape>,
    document.body
  );
}

const ForwardedDialogMain: ForwardRefExoticComponent<DialogMainProps> = forwardRef(DialogMain);

/************ Export ************/
export const Dialog = Object.assign(ForwardedDialogMain, {
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