import React from 'react';
import purifyHTML from '@utilities/purify-html';
import * as S from './style';

type Props = {
  HTMLString: string;
  className?: string;
};

function DynamicHtml(props: Props) {
  const { HTMLString, className } = props;

  return (
    <S.Container
      className={className}
      dangerouslySetInnerHTML={{ __html: purifyHTML(HTMLString) }}
    />
  );
}

export default DynamicHtml;
