import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'relay-hooks';
import * as S from './style';
import { SMALL } from '../../../settings/media';
import { footer_aggregates$key, footer_aggregates } from '../../../__generated__/footer_aggregates.graphql';

export const footerFragmentSpec = graphql`
  fragment footer_aggregates on Query {
    genres: novelAggregateGenres {
      field
      count
    }
    status: novelAggregateStatus {
      field
      count
    }
    types: novelAggregateTypes {
      field
      count
    }
    tags: novelAggregateTags {
      field
      count
    }
  }
`;
type Props = {
  classifications: footer_aggregates$key;
};

function generateContent(fields: footer_aggregates) {
  const { genres, status, tags, types } = fields;

  return ['genre', 'status', 'type']
    .map(key => {
      const classifications =
        // eslint-disable-next-line no-nested-ternary
        key === 'genre' ? genres : key === 'status' ? status : key === 'tagged' ? tags : key === 'type' ? types : null;
      if (!classifications) return null;
      return {
        heading: key,
        content: (
          <S.FooterClassifications
            headingText={key}
            classifications={classifications.map(cls => ({ name: cls.field, link: `/novels/${key}/${cls.field}` }))}
          />
        )
      };
    })
    .filter(c => c);
  // return fields.map(f => ({ heading: 'RR', content: <S.FooterClassifications headingText={} ))
}

function Footer(props: Props) {
  const { classifications } = props;
  const fragment = useFragment(footerFragmentSpec, classifications);

  const isSmallScreen = useMediaQuery({ minWidth: SMALL });

  return (
    <S.FooterContainer>
      {!isSmallScreen ? (
        <S.FooterAccordionWrapper>
          <S.FooterAccordion accordionContent={generateContent(fragment)} initialOpen={false} />
        </S.FooterAccordionWrapper>
      ) : (
        <S.FooterClassificationLinksWrapper>
          {generateContent(fragment).map(c => c.content)}
        </S.FooterClassificationLinksWrapper>
      )}

      <S.FooterContactWrapper>
        <S.FooterLinks>Contact</S.FooterLinks>
        <S.FooterContactText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius neque quibusdam tempore saepe pariatur
          voluptates, ut eligendi! Autem doloribus deleniti harum neque, quidem ea commodi voluptates, cupiditate quia
          explicabo hic ullam? Dolor impedit facilis modi veritatis dolore deleniti cupiditate rem iure id ex temporibus
          provident expedita, tempore enim nisi animi aperiam aliquam voluptatem suscipit!
        </S.FooterContactText>
      </S.FooterContactWrapper>

      <S.FooterLinksWrapper>
        <S.FooterLinks>&copy; 2020 UkiyoNovels</S.FooterLinks>
        <S.FooterLinks>Terms &amp; conditions</S.FooterLinks>
        <S.FooterLinks>Privacy policy</S.FooterLinks>
        <S.FooterLinks>Copyright</S.FooterLinks>
      </S.FooterLinksWrapper>
    </S.FooterContainer>
  );
}

export default Footer;
