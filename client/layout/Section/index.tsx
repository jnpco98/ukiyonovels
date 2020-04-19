import React, { ReactNode } from 'react';
import * as S from './style';

export type SectionType = 'primarySecondary' | 'secondaryPrimary' | 'equal';

type Props = {
  className?: string;
  children: ReactNode;
  layout?: SectionType;
};

function Section(props: Props) {
  const { className, children, layout } = props;
  return (
    <S.Container className={className} layout={layout}>
      {children}
    </S.Container>
  );
}

export default Section;
