import React, { ReactElement } from 'react';

type Props = {
  wrapper: (children: ReactElement) => ReactElement;
  children: ReactElement;
  condition: boolean;
}

function ConditionalWrapper(props: Props) {
  const { wrapper, children, condition } = props;

  return condition ? wrapper(children) : children;
}

export default ConditionalWrapper;