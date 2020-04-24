import React, { ReactNode } from 'react';
import * as S from './style';

export type SectionType = 'primarySecondary' | 'secondaryPrimary' | 'equal';

type Props = {
  className?: string;
  children: ReactNode;
  layout?: SectionType;
  sectionTitle?: string;
};

function Section(props: Props) {
  const { className, children, layout, sectionTitle } = props;
  return (
    <S.Container>
      {sectionTitle && <S.SectionTitle>{sectionTitle}</S.SectionTitle>}
      <S.Wrapper className={className} layout={layout}>
        {children}
      </S.Wrapper>
    </S.Container>
  );
}

export default Section;
