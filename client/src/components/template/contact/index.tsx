import React, { ReactElement, useRef } from 'react';
import * as S from './style';
import DynamicHTML from '../../molecule/dynamic-html';
import { contact } from '../../../settings/config/settings.json';
import { jsonFormData } from '../../../utilities/formdata';
import { AnyStyledComponent } from 'styled-components';

const Contact: React.FC = (): ReactElement => {
    const { pageHeading, pageText, fields, submitText } = contact;
    const inputRef = useRef(document.createElement('input'));

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(!(event.target instanceof HTMLFormElement)) return;

        const formData = new FormData(event.target);

        const params = {
            ...jsonFormData(formData),
            ['Source']: window.location.href
        };

        console.log('call api to submit', params);
    }

    return (
        <S.ContactPageContainer>
            <S.ContactPageContent>
                {pageHeading && <S.ContactPageTitle>{pageHeading}</S.ContactPageTitle>}
                {pageText && <DynamicHTML HTMLString={pageText}/>}
            </S.ContactPageContent>
            <S.ContactPageForm onSubmit={handleSubmit}>
                {
                    fields.map(f => {
                        const InputStyledComponent: AnyStyledComponent = f.multi ? S.ContactPageFormTextBox : S.ContactPageFormInput;
                        return <InputStyledComponent ref={inputRef} name={f.displayName} placeholder={f.placeholder} required={f.required} pattern={f.pattern || null} autocomplete="off"/>
                    })
                }
                <S.ContactPageFormSubmit submitButton>{submitText}</S.ContactPageFormSubmit>
            </S.ContactPageForm>
        </S.ContactPageContainer>
    );
};

export default Contact;