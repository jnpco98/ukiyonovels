import styled, { css } from 'styled-components/macro';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT, GUTTER_TOP, GUTTER_BOTTOM } from '../../../utilities/mixins';
import { SectionTitle } from '../../atom/text/style';
import * as M from '../../../settings/media';
import Button from '../../atom/button';
import Input, { InputType } from '../../atom/input';

const ContactPageFormText = css`
  border: 0;
  background: none;
  padding: 0.5rem;
  appearance: none;
  width: 100%;
  margin: 0;
  background: white;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.1s ease;
`;

export const ContactPageContainer = styled.div`
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};
  ${gutter(GUTTER_TOP)};
  ${gutter(GUTTER_BOTTOM)};

  width: 100%;
`;

export const ContactPageContent = styled.div`
  margin-bottom: 2rem;
  
  & + & {
    margin-top: 3rem;
  }

  ${M.MEDIA_SMALL} {
    & + & {
      margin-top: 5rem;
    }
  }
`;

export const ContactPageTitle = styled(SectionTitle).attrs({ as: 'h1' })``;

export const ContactPageForm = styled.form`
  display: flex;
  flex-direction: column;
`;

type ContactPageFieldStyleProps = {
  name?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
}

export const ContactPageFormInput = styled(Input).attrs({ inputType: InputType.Single })<ContactPageFieldStyleProps>`
  ${ContactPageFormText};
  
  height: 2.5rem;

  ${M.MEDIA_LARGE} {
    height: 3rem;
  }
`;

export const ContactPageFormTextBox = styled(Input).attrs({ inputType: InputType.Multi })<ContactPageFieldStyleProps>`
  ${ContactPageFormText};
  resize: none;
  min-height: 10rem;
  
  ${M.MEDIA_LARGE} {
    min-height: 12rem;
  }
`;

export const ContactPageFormSubmit = styled(Button)`
  align-self: start;
  margin: 1rem 0;
`;