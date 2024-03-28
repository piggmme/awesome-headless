import { Children, ReactNode, isValidElement } from "react";

export function toComponent<T>(children: ReactNode, ComponentType: T) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(child => isValidElement(child) && child.type === ComponentType)
    .slice(0, 2);
}