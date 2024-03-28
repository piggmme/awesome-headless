import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

// https://stackoverflow.com/questions/65549938/implement-as-prop-in-react-component-in-typescript
export type PolymorphicAsProp<E extends ElementType> = {
  as?: E;
};

export type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>;

export const divEl = 'div';
export const spanEl = 'span';
export const buttonEl = 'button';
export const h1El = 'h1';
