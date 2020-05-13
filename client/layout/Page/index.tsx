import React, { ReactNode } from 'react';
import Navigation from '@components/organism/Navigation';
import Footer from '@components/organism/Footer';
import BannerLogo from '@components/organism/BannerLogo';


type Props = {
  children: ReactNode;
}

function Page(props: Props) {
  const { children } = props;

  return(
    <>
      <BannerLogo/>
      <Navigation/>
      {children}
      {/* <Footer/> */}
    </>
  );
}

export default Page;