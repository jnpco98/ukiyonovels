import React, { ReactElement } from 'react';
import { AnyStyledComponent } from 'styled-components';
import * as S from './style';

export enum MenuHamburgerType {
  SpeedRunner,
  NoEntry,
  Spread,
  Tear
}

type Props = {
  type?: MenuHamburgerType;
  active?: boolean;
  className?: string;
};

function Hamburger(props: Props) {
  const { className, active, type } = props;

  const generateSpan = (count: number): ReactElement[] =>
    Array(count)
      .fill(null)
      .map((_, idx) => <span key={idx} />);

  let StyledHamburger: AnyStyledComponent;
  let spanCount: number;

  switch (type) {
    default:
    case MenuHamburgerType.NoEntry:
      StyledHamburger = S.NoEntry;
      spanCount = 6;
      break;
    case MenuHamburgerType.SpeedRunner:
      StyledHamburger = S.SpeedRunner;
      spanCount = 3;
      break;
    case MenuHamburgerType.Spread:
      StyledHamburger = S.Spread;
      spanCount = 4;
      break;
    case MenuHamburgerType.Tear:
      StyledHamburger = S.Tear;
      spanCount = 3;
      break;
  }

  return (
    <StyledHamburger className={className} active={active}>
      {generateSpan(spanCount)}
    </StyledHamburger>
  );
}

export default Hamburger;
