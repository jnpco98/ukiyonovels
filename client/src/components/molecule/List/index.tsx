import React from 'react';
import Simplebar from 'simplebar-react';
import { RowContent, RowType } from '@components/atom/Row';
import * as S from './style';
import { Responsive } from '@utilities/mixins';

type Props = {
  className?: string;
  heading?: string;
  contents: RowContent[];
  responsive?: Responsive;
  maxHeight?: string;
  rowType?: RowType;
};

function List(props: Props) {
  const { className, heading, contents, responsive, maxHeight, rowType } = props;

  return (
    <S.Container className={className}>
      {heading && <S.Heading>{heading}</S.Heading>}
      <Simplebar style={{ maxHeight }}>
        <S.Wrapper responsive={responsive}>
          {contents.map((c) => (
            <S.Item content={c} key={c.title + c.link} rowType={rowType}/>
          ))}
        </S.Wrapper>
      </Simplebar>
    </S.Container>
  );
}

export default List;
