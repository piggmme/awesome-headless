import { ElementType, ForwardRefExoticComponent, forwardRef, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PolymorphicProps, buttonEl, divEl, h1El } from "../../utils/type";
import { DialogContext, DialogContextType } from "./useDialog";
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
  PolymorphicProps<E> & {
    closed?: boolean;
  }
function DialogButton<T extends ElementType = typeof buttonEl>({
  as,
  children,
  onClick,
  closed,
  ...props
}: DialogButtonProps<T>){
  const Component = as ?? buttonEl;
  const dialog = useContext(DialogContext);

  return (
    <Component
      onClick={(e) => {
        onClick?.(e);
        if (closed) dialog?.close();
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

/************ Main ************/
type DialogMainProps<E extends ElementType = typeof divEl> =
  PolymorphicProps<E> & {
    context: DialogContextType;
  }

function DialogMain<T extends ElementType = typeof divEl>(
  { as, context, children, ...props }: DialogMainProps<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forwardDialogRef: any,
) {
  const Component = as ?? divEl;
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([]);
  const dialogRef = useRef<HTMLElement>(null);
  const ref = forwardDialogRef || dialogRef;

  useEffect(() => {
    if (context.isOpen) ref?.current?.focus();
  }, [ref, context.isOpen]);

  useEffect(() => {
    if (context.isOpen && ref?.current) {
      const elements = Array.from(
        ref.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
        ) as HTMLElement[];
      setFocusableElements(elements);
    }
  }, [context.isOpen, ref]);

  const handleFocusing = (e: KeyboardEvent) => {
    if (focusableElements.length === 0) return; // 포커스 가능한 요소가 없으면 종료
    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement)
    if (currentIndex === -1) return; // 현재 포커스 요소가 배열에 없으면 종료

    let nextIndex;
    if (e.shiftKey) {
      // 역방향 탭
      nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
    } else {
      // 순방향 탭
      nextIndex = currentIndex === focusableElements.length - 1 ? 0 : currentIndex + 1;
    }

    focusableElements[nextIndex].focus();
    e.preventDefault();
  }

  if (!context.isOpen) return null;

  return createPortal(
    <Keyboard.Escape then={context.close}>
      <Keyboard.Tab then={handleFocusing}>
        <DialogContext.Provider value={context}>
          <Component {...props} ref={ref} tabIndex={-1}>
            {children}
          </Component>
        </DialogContext.Provider>
      </Keyboard.Tab>
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
});

export { default as useDialog } from './useDialog';

export type {
  DialogMainProps,
  DialogTitleProps,
  DialogContentsProps,
  DialogButtonProps,
};