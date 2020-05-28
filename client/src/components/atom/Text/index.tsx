import React, { HTMLAttributes, AnchorHTMLAttributes, LabelHTMLAttributes } from 'react';
import { AnyStyledComponent } from 'styled-components';
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
  textType?: TextType;
  decorateActive?: boolean;
} & (
  HTMLAttributes<HTMLHeadingElement> | 
  HTMLAttributes<HTMLParagraphElement> | 
  LabelHTMLAttributes<HTMLLabelElement> | 
  AnchorHTMLAttributes<HTMLAnchorElement>
);

function Text(props: Props) {
  const { children, textType, ...restProps } = props;

  let StyledText: AnyStyledComponent;

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
      break;
    case TextType.Label:
      StyledText = S.Label;
      break;
  }

  return <StyledText {...restProps}>{children || ''}</StyledText>;
}

export default Text;