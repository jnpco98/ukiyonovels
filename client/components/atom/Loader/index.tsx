import React, { ReactElement } from 'react';
import { AnyStyledComponent } from 'styled-components';
import * as S from './style';

export enum LoaderType {
  Ring,
  DualRing,
  Ellipsis
}

type Props = {
  loaderType?: LoaderType;
};

function Loader(props: Props) {
  const { loaderType } = props;

  const generateDiv = (count: number): ReactElement[] =>
    Array(count)
      .fill(null)
      .map((_, idx) => <div key={idx}></div>);

  let StyledLoader: AnyStyledComponent;
  let divCount: number;

  switch (loaderType) {
    default:
    case LoaderType.Ring:
      StyledLoader = S.Ring;
      divCount = 4;
      break;
    case LoaderType.DualRing:
      StyledLoader = S.DualRing;
      divCount = 0;
      break;
    case LoaderType.Ellipsis:
      StyledLoader = S.Ellipsis;
      divCount = 4;
      break;
  }

  return <StyledLoader>{generateDiv(divCount)}</StyledLoader>;
}

export default Loader;
