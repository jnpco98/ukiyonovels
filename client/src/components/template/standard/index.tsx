import React, { ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as S from './style';
import Text, { TextType } from '../../atom/text';
import DynamicHTML from '../../molecule/dynamic-html';

type Props = {
  pageHeading?: string;
  pageText?: string;

  contents?: {
    heading?: string;
    text: string;
  }[];
} & RouteComponentProps;

function StandardPage(props: Props): ReactElement {
  const { pageHeading, pageText, contents } = props;

  return (
    <S.StandardPageContainer>
      <S.StandardPageContent>
        {pageHeading && <S.StandardPageTitle>{pageHeading}</S.StandardPageTitle>}
        {pageText && <DynamicHTML HTMLString={pageText} />}
      </S.StandardPageContent>
      {contents &&
        contents.map(c => (
          <S.StandardPageContent key={c.heading}>
            {c.heading && <Text textType={TextType.SectionTitle}>{c.heading}</Text>}
            {c.text && <DynamicHTML HTMLString={c.text} />}
          </S.StandardPageContent>
        ))}
    </S.StandardPageContainer>
  );
}

export default StandardPage;
