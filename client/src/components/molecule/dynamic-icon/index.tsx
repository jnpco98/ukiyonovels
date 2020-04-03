import React, { ReactElement } from 'react';
import purifyHTML from '../../../utilities/purify-html';
import * as S from './style';

type Props = {
  SVGString: string;
  className?: string;
};

const DynamicIcon: React.FC<Props> = (props: Props): ReactElement => {
  const { SVGString, className } = props;

  return <S.DynamicSvgContainer className={className} dangerouslySetInnerHTML={{ __html: purifyHTML(SVGString) }} />;
};

export default DynamicIcon;
