import React, { forwardRef } from 'react';
import * as S from './style';
import { storeItem, getItemFromStorage } from '../../../utilities/localstorage';

type Props = {};

const THEME_KEY = 'theme_mode';

type LocalSettings = {
  color: string;
  fontSize: string;
};

function updateTheme(settingUpdates: Partial<LocalSettings>) {
  const localSettings = (getItemFromStorage(THEME_KEY) || {}) as LocalSettings;
  console.log(localSettings);
  storeItem(THEME_KEY, { ...localSettings, ...settingUpdates });
}

function Settings(props: Props, ref: React.RefObject<HTMLDivElement>) {
  const { color, fontSize } = (getItemFromStorage(THEME_KEY) || {}) as LocalSettings;
  return (
    <S.SettingsContainer ref={ref} onSubmit={() => ({})}>
      <S.SettingsContent></S.SettingsContent>
    </S.SettingsContainer>
  );
}

export default forwardRef(Settings as React.FC<Props>);
