import React, { ReactNode } from 'react';
import Header from '@components/organism/Header';
import Footer from '@components/organism/Footer';

type Props = {
  children: ReactNode;
}

function Page(props: Props) {
  const { children } = props;

  return(
    <>
      <Header/>
      {children}
      {/* <Footer/> */}
    </>
  );
}

export default Page;