import React, { ReactNode } from 'react';
import Link from 'next/link';
import Loader from '../Loader';
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
} & (React.HTMLAttributes<HTMLAnchorElement> | React.HTMLAttributes<HTMLButtonElement>);

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

  const Element = <S.Container {...buttonProps} {...restProps}>{loading ? <Loader /> : children}</S.Container>;

  if (link) return <Link href={link}>{Element}</Link>;

  return Element;
}

export default Button;