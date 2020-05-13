import React, { cloneElement, ReactElement } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  children: ReactElement;
} & LinkProps;

function Link(props: Props) {
  const { children, href, ...restProps } = props;
  const router = useRouter();

  const active = router.pathname === href;
  return <NextLink href={href} {...restProps}>{cloneElement(children, { active })}</NextLink> 
}

export default Link;