import React, { cloneElement, ReactElement } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  children: ReactElement;
} & LinkProps;

function Link(props: Props) {
  const { children, as, href, ...restProps } = props;
  const router = useRouter();

  const active = as ? router.asPath === as : router.pathname === href;

  return (
    <NextLink href={href} as={as} {...restProps}>
      {cloneElement(children, { active })}
    </NextLink>
  );
}

export default Link;
