import React, { ReactElement } from 'react';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

type Props = {
  className?: string;
  multiple?: boolean;
  accordionContent: {
    heading: string;
    content: React.ReactNode;
  }[];
  initialOpen?: boolean;
  flat?: boolean;
};

const Accordion: React.FC<Props> = (props: Props): ReactElement => {
  const { className, accordionContent, flat = false, initialOpen = true, multiple = true } = props;

  return (
    <S.AccordionContainer flat={flat} className={className}>
      <S.AccordionTabs>
        {accordionContent.map(ac => (
          <S.AccordionTab>
            <S.AccordionTabTrigger
              id={ac.heading}
              name={ac.heading}
              type={multiple ? 'checkbox' : 'radio'}
              defaultChecked={initialOpen}
            />
            <S.AccordionTabLabel for={ac.heading}>
              <S.AccordionTabLabelText>{ac.heading}</S.AccordionTabLabelText>
              <S.AccordionTabLabelIcon icon={faArrowCircleRight} />
            </S.AccordionTabLabel>
            <S.AccordionContent>{ac.content}</S.AccordionContent>
          </S.AccordionTab>
        ))}
      </S.AccordionTabs>
    </S.AccordionContainer>
  );
};

export default Accordion;
