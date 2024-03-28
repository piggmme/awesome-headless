import { ReactNode, forwardRef, useEffect, useState } from "react";
import Keyboard from "./Keyboard";

const AccessWithTab = forwardRef<HTMLElement, { children: ReactNode }>(
  function AccessWithTab ({ children }, ref) {
    const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([]);

    useEffect(() => {
      if (ref && typeof ref !== "function" && ref.current) {
        const elements = Array.from(
          ref.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
        ) as HTMLElement[];
        setFocusableElements(elements);
      }
    }, [ref]);

    const handleFocusing = (e: KeyboardEvent) => {
      if (focusableElements.length === 0) return;
      const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement)
      if (currentIndex === -1) return;

      let nextIndex;
      if (e.shiftKey) {
        // Reverse access
        nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
      } else {
        // Forward access
        nextIndex = currentIndex === focusableElements.length - 1 ? 0 : currentIndex + 1;
      }

      focusableElements[nextIndex].focus();
      e.preventDefault();
    }
    return (
      <Keyboard.Tab then={handleFocusing}>
        {children}
      </Keyboard.Tab>
    );
  }
)

export default AccessWithTab