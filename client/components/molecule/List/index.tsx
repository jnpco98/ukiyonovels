import React from 'react';
import { RowContent } from '@components/atom/Row';
import * as S from './style';

type Props = {
  className?: string;
  heading?: string;
  contents: RowContent[];
  bulleted?: boolean;
}

function List(props: Props) {
  const { className, heading, contents, bulleted } = props;

  return(
    <S.Container className={className}>
      {heading && <S.Heading>{heading}</S.Heading>}
      {contents.map(c => <S.Item content={c} bulleted={bulleted} key={c.title + c.link}/>)}
    </S.Container>
  );
}

export default List;