import React, { ReactElement } from 'react';
import * as S from './style';

export enum ButtonType {
    Info,
    Success,
    Warning,
    Error
}

type Props = {
    href?: string;
    className?: string;
    submitButton?: boolean;
    buttonType?: ButtonType;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = (props: Props): ReactElement => {
    const { children, className, onClick, buttonType, href, submitButton } = props;

    const submitButtonProps: any = submitButton ? { type: 'submit', as: 'button' } : { href };

    return (
        <S.ButtonContainer className={className} onClick={onClick} buttonType={buttonType} {...submitButtonProps}>
            {children}
        </S.ButtonContainer>
    );
};

export default Button;
