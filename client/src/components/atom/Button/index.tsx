import React, { ReactNode, HTMLAttributes } from 'react';
import * as S from './style';

export enum ButtonType {
  Info,
  Success,
  Warning,
  Error
}

type Props = {
  anchor?: boolean;
  buttonType?: ButtonType;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
} & (({ anchor: true & HTMLAttributes<HTMLAnchorElement> }) | HTMLAttributes<HTMLButtonElement>);

function Button(props: Props) {
  const {
    loading,
    children,
    anchor,
    ...restProps
  } = props;

  return (
    <S.Container loading={loading} {...restProps as any} as={anchor ? 'a' : 'button'}>
      {loading ? <S.LoadMoreIcon /> : children}
    </S.Container>
  );
}

export default Button;
