import React from 'react';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

type Props = {
  className?: string;
  multiple?: boolean;
  accordionContent: {
    key: string;
    heading: string;
    content: React.ReactNode;
  }[];
  initialOpen?: boolean;
  flat?: boolean;
};

function Accordion(props: Props) {
  const { className, accordionContent, flat = false, initialOpen = true, multiple = true } = props;

  return (
    <S.Container flat={flat} className={className}>
      <S.Tabs>
        {accordionContent.map((ac) => (
          <S.Tab>
            <S.Trigger
              id={ac.key}
              name={ac.heading}
              type={multiple ? 'checkbox' : 'radio'}
              defaultChecked={initialOpen}
            />
            <S.Label for={ac.key}>
              <S.Text>{ac.heading}</S.Text>
              <S.Icon icon={faArrowCircleRight} />
            </S.Label>
            <S.Content>{ac.content}</S.Content>
          </S.Tab>
        ))}
      </S.Tabs>
    </S.Container>
  );
}

export default Accordion;
