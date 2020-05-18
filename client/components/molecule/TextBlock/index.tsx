import React from 'react';
import Text, { TextType } from '@components/atom/Text';
import * as S from './style';

type Props = {
  className?: string;
  heading: string;
  subtitle?: string | number;
  linkLabel?: string;
  link?: string;
}

function TextBlock(props: Props) {
  const { className, heading, subtitle, linkLabel, link } = props;

  return(
    <S.Container className={className}>
      <Text textType={TextType.SubsectionTitle}>{heading}</Text>
      {subtitle && <Text>{subtitle}</Text>}
      {linkLabel && link && <S.Link link={link}>{linkLabel}</S.Link>}
    </S.Container>
  );
}

export default TextBlock;