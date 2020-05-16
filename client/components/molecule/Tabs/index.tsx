import React from 'react';
import * as S from './style';

type Props = {
  className?: string;
  heading?: string;
  items: string[];
}

function Tabs(props: Props) {
  const { className, heading, items } = props;

  return(
    <S.Container className={className}>
      <S.Wrapper>
        {heading && <S.Heading>{heading}</S.Heading>}
        {items.map((item, idx) => <S.Item key={idx}>{item}</S.Item>)}
      </S.Wrapper>
    </S.Container>
  )
}

export default Tabs;