import React, { ReactElement, useRef } from 'react';
import Settings from '../../molecule/settings';
import * as S from './style';

type Props = {
  active: boolean;
  setActive: Function;
  onSettingsUpdate?: Function;
};

const SettingsOverlay: React.FC<Props> = (props: Props): ReactElement => {
  const { onSettingsUpdate, active, setActive } = props;

  const settingsRef = useRef(document.createElement('div'));

  const handleClick = (event: React.MouseEvent) => {
    if (event.target instanceof Node && settingsRef.current.contains(event.target)) return;
    setActive(false);
  };

  return (
    <S.SettingsOverlayContainer active={active} className="is-content-centered" onClick={event => handleClick(event)}>
      <Settings ref={settingsRef} />
    </S.SettingsOverlayContainer>
  );
};

export default SettingsOverlay;
