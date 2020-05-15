import React, { ReactNode, HTMLAttributes } from 'react';
import Link from '@components/atom/Link';
import * as S from './style';

export enum ButtonType {
  Info,
  Success,
  Warning,
  Error
}

type Props = {
  link?: string;
  absolute?: boolean;
  className?: string;
  buttonType?: ButtonType;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
} & (HTMLAttributes<HTMLAnchorElement> | HTMLAttributes<HTMLButtonElement>);

function Button(props: Props) {
  const {
    children,
    className,
    buttonType,
    link,
    absolute,
    disabled,
    loading,
    ...restProps
  } = props;

  const buttonProps: any = { className, buttonType, disabled, loading };

  if (!link) buttonProps.as = 'button';
  if (absolute) buttonProps.href = link;

  const Element = <S.Container {...buttonProps} {...restProps}>{loading ? <S.LoadMoreIcon /> : children}</S.Container>;

  if (link) return <Link href={link}>{Element}</Link>;

  return Element;
}

export default Button;