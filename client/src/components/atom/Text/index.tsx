import React, { ReactNode } from 'react';
import { AnyStyledComponent } from 'styled-components';
import Link from '@components/atom/Link';
import * as S from './style';

export enum TextType {
  PageTitle,
  SectionTitle,
  SubsectionTitle,
  Paragraph,
  Span,
  Anchor,
  Label
}

type Props = {
  link?: string;
  absolute?: boolean;
  className?: string;
  children?: ReactNode;
  textType?: TextType;
  htmlFor?: string;
  decorateActive?: boolean;
  center?: boolean;
};

function Text(props: Props) {
  const { children, className, textType, link, absolute, htmlFor, decorateActive, center } = props;

  let StyledText: AnyStyledComponent;
  const textProps: any = { className, textType, htmlFor, center };

  switch (textType) {
    case TextType.PageTitle:
      StyledText = S.PageTitle;
      break;
    case TextType.SectionTitle:
      StyledText = S.SectionTitle;
      break;
    case TextType.SubsectionTitle:
      StyledText = S.SubsectionTitle;
      break;
    default:
    case TextType.Paragraph:
      StyledText = S.Paragraph;
      break;
    case TextType.Span:
      StyledText = S.Span;
      break;
    case TextType.Anchor:
      StyledText = S.Anchor;
      if (absolute) textProps.href = link;
      textProps.decorateActive = !!decorateActive;
      break;
    case TextType.Label:
      StyledText = S.Label;
      break;
  }

  const Element = <StyledText {...textProps}>{children || ''}</StyledText>;
  if (link)
    return (
      <Link href={link} passHref>
        {Element}
      </Link>
    );
  return Element;
}

export default Text;
