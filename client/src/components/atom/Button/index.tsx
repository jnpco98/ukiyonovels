import React, { ReactNode, HTMLAttributes } from 'react';
import * as S from './style';

export enum ButtonType {
  Info,
  Success,
  Warning,
  Error
}

type Props = {
  buttonType?: ButtonType;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
} & (HTMLAttributes<HTMLAnchorElement> | HTMLAttributes<HTMLButtonElement>);

function Button(props: Props) {
  const {
    loading,
    children,
    ...restProps
  } = props;

  return (
    <S.Container loading={loading} {...restProps as any}>
      {loading ? <S.LoadMoreIcon /> : children}
    </S.Container>
  );
}

export default Button;
