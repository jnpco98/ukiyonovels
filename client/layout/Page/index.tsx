import React, { ReactNode } from 'react';
import Footer from '@components/organism/Footer';

type Props = {
  children: ReactNode;
}

function Page(props: Props) {
  const { children } = props;
  return(
    <>
      {children}
      <Footer/>
    </>
  );
}

export default Page;