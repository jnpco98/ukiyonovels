import React, { ReactElement } from 'react';
import * as S from './style';

export enum ButtonType {
  Info,
  Success,
  Warning,
  Error
}

type Props = {
  to?: string;
  href?: string;
  className?: string;
  submitButton?: boolean;
  buttonType?: ButtonType;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = (props: Props): ReactElement => {
  const { children, className, onClick, buttonType, href, to, submitButton } = props;

  const submitButtonProps: any = submitButton ? { type: 'submit', as: 'button' } : { href, to };

  return (
    <S.ButtonContainer className={className} onClick={onClick} buttonType={buttonType} {...submitButtonProps}>
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
