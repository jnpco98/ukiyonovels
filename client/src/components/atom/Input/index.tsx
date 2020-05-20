import React, { ReactElement, forwardRef, ForwardRefRenderFunction, HTMLAttributes, RefObject } from 'react';
import { AnyStyledComponent } from 'styled-components';
import * as S from './style';

export enum InputType {
  Multi,
  Single
}

type Props = {
  className?: string;
  inputType?: InputType;
} & (HTMLAttributes<HTMLInputElement> | HTMLAttributes<HTMLTextAreaElement>);

function Input(
  props: Props,
  ref: RefObject<HTMLInputElement | HTMLTextAreaElement>
): ReactElement {
  const { className, inputType, ...restProps } = props;

  let StyledInput: AnyStyledComponent;

  switch (inputType) {
    case InputType.Multi:
      StyledInput = S.TextArea;
      break;
    default:
    case InputType.Single:
      StyledInput = S.Input;
      break;
  }

  return <StyledInput ref={ref} className={className} {...restProps} />;
}

export default forwardRef(Input as ForwardRefRenderFunction<HTMLInputElement, Props>);