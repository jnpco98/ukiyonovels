import React, { ReactElement } from 'react';
import * as S from './style';

type Props = {
  className?: string;
  title?: string;
  fillRate?: number;
  link?: string;
};

const Bar: React.FC<Props> = (props: Props): ReactElement => {
  const { className, title, fillRate, link } = props;

  return (
    <S.BarContainer className={className}>
      {title && (
        <S.BarTextWrapper>
          <S.BarTitle to={link}>{title}</S.BarTitle>
          <S.BarRating>{(fillRate * 10).toFixed(1)}</S.BarRating>
        </S.BarTextWrapper>
      )}
      <S.BarFill rating={fillRate} />
    </S.BarContainer>
  );
};

export default Bar;
