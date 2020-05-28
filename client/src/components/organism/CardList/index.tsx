import React from 'react';
import { CardContent } from '@components/molecule/Card';
import * as S from './style';
import { Responsive } from '@utilities/mixins';

type Props = {
  className?: string;
  heading?: string;
  contents: CardContent[];
  cardType?: 'standard' | 'wide';
  responsive?: Responsive;
};

function CardList(props: Props) {
  const { className, heading, contents, cardType, responsive } = props;

  return (
    <S.Container className={className}>
      {heading && <S.Heading>{heading}</S.Heading>}
      <S.Wrapper responsive={responsive}>
        {contents.map((content, idx) =>
          cardType === 'wide' ? (
            <S.Wide key={idx} content={content} />
          ) : (
            <S.Standard key={idx} content={content} />
          )
        )}
      </S.Wrapper>
    </S.Container>
  );
}

export default CardList;
