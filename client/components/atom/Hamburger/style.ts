import styled, { css } from 'styled-components';

const MULTIPLIER = 0.25;
const BASE_WIDTH = 4 * MULTIPLIER;
const BASE_HEIGHT = 3 * MULTIPLIER;

type HamburgerProps = {
  active: boolean;
};

const Base = css`
  width: ${BASE_WIDTH}rem;
  height: ${BASE_HEIGHT}rem;
  position: relative;
  transform: rotate(0.001deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 200;
`;

const Line = css`
  display: block;
  position: absolute;
  height: ${BASE_HEIGHT / 5}rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.default};
  border-radius: ${BASE_HEIGHT / 5}rem;
  opacity: 1;
  left: 0;
  transform: rotate(0.001deg);
  transition: 0.25s ease-in-out;
`;

export const SpeedRunner = styled.div<HamburgerProps>`
  ${Base};

  span {
    ${Line};
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: ${(BASE_HEIGHT / 5) * 2}rem;
    }
    &:nth-child(3) {
      top: ${(BASE_HEIGHT / 5) * 4}rem;
    }
  }

  ${props =>
    props.active &&
    css`
      span {
        &:nth-child(1) {
          top: ${(BASE_HEIGHT / 5) * 2}rem;
          transform: rotate(135deg);
        }
        &:nth-child(2) {
          opacity: 0;
          left: -4rem;
        }
        &:nth-child(3) {
          top: ${(BASE_HEIGHT / 5) * 2}rem;
          transform: rotate(-135deg);
        }
      }
    `};
`;

export const NoEntry = styled.div<HamburgerProps>`
  ${Base};

  span {
    display: block;
    position: absolute;
    height: ${BASE_HEIGHT / 5}rem;
    width: 50%;
    background: ${({ theme }) => theme.colors.default};
    opacity: 1;
    transform: rotate(0.001deg);
    transition: 0.25s ease-in-out;
    &:nth-child(even) {
      left: 50%;
      border-radius: 0 ${BASE_HEIGHT / 5}rem ${BASE_HEIGHT / 5}rem 0;
    }
    &:nth-child(odd) {
      left: 0;
      border-radius: ${BASE_HEIGHT / 5}rem 0 0 ${BASE_HEIGHT / 5}rem;
    }
    &:nth-child(1),
    &:nth-child(2) {
      top: 0;
    }
    &:nth-child(3),
    &:nth-child(4) {
      top: ${(BASE_HEIGHT / 5) * 2}rem;
    }
    &:nth-child(5),
    &:nth-child(6) {
      top: ${(BASE_HEIGHT / 5) * 4}rem;
    }
  }

  ${props =>
    props.active &&
    css`
      span {
        &:nth-child(1) {
          top: ${BASE_HEIGHT / 6.42}rem;
          left: ${BASE_WIDTH / 12}rem;
        }
        &:nth-child(2) {
          top: ${BASE_HEIGHT / 6.42}rem;
          left: calc(50% - ${BASE_WIDTH / 12}rem);
        }
        &:nth-child(3) {
          left: -50%;
          opacity: 0;
        }
        &:nth-child(4) {
          left: 100%;
          opacity: 0;
        }
        &:nth-child(5) {
          top: ${BASE_WIDTH / 2 - 0.0625}rem;
          left: ${BASE_WIDTH / 12}rem;
        }
        &:nth-child(6) {
          top: ${BASE_WIDTH / 2 - 0.0625}rem;
          left: calc(50% - ${BASE_WIDTH / 12}rem);
        }
        &:nth-child(1),
        &:nth-child(6) {
          transform: rotate(45deg);
        }
        &:nth-child(2),
        &:nth-child(5) {
          transform: rotate(-45deg);
        }
      }
    `};
`;

export const Spread = styled.div<HamburgerProps>`
  ${Base};

  span {
    ${Line};
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: ${(BASE_HEIGHT / 5) * 2}rem;
    }
    &:nth-child(4) {
      top: ${(BASE_HEIGHT / 5) * 4}rem;
    }
  }

  ${props =>
    props.active &&
    css`span {
    &:nth-child(1){
      top: ${(BASE_HEIGHT / 5) * 2}rem;
      width: 0;
      left: 50%;
    }
    &:nth-child(2){
      transform: rotate(45deg);
    }
    &:nth-child(3){
      transform: rotate(-45deg);
    }
    &:nth-child(4){
      top: ${(BASE_HEIGHT / 5) * 2}rem;
      width: 0;
      left: 50%;
    }
  `};
`;

export const Tear = styled.div<HamburgerProps>`
  ${Base};

  span {
    ${Line};
    &:nth-child(1) {
      top: 0;
      transform-origin: left center;
    }
    &:nth-child(2) {
      top: ${(BASE_HEIGHT / 5) * 2}rem;
      transform-origin: left center;
    }
    &:nth-child(3) {
      top: ${(BASE_HEIGHT / 5) * 4}rem;
      transform-origin: left center;
    }
  }

  ${props =>
    props.active &&
    css`
      span {
        &:nth-child(1) {
          top: -${BASE_HEIGHT / 15}rem;
          left: ${BASE_WIDTH / 5.625}rem;
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          width: 0;
          opacity: 0;
        }
        &:nth-child(3) {
          top: ${BASE_HEIGHT / 1.1538}rem;
          left: ${BASE_WIDTH / 5.625}rem;
          transform: rotate(-45deg);
        }
      }
    `};
`;
