import React, { ReactElement } from 'react';
import purifyHTML from '@utilities/purify-html';
import * as S from './style';

type Props = {
  HTMLString: string;
  className?: string;
};

const DynamicHtml: React.FC<Props> = (props: Props): ReactElement => {
  const { HTMLString, className } = props;

  return <S.DynamicHtmlContainer className={className} dangerouslySetInnerHTML={{ __html: purifyHTML(HTMLString) }} />;
};

export default DynamicHtml;
