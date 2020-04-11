import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode;
};

function Standard(props: Props) {
  return (
    <div>
      <div>Header</div>
      {props.children}
    </div>
  );
}

export default Standard;
