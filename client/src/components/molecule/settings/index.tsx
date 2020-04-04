import React, { forwardRef } from 'react';
import * as S from './style';
import Select from '../../atom/select';
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
      <S.SettingsContent>
        <Select
          options={[
            { value: 'light', displayName: 'light' },
            { value: 'dark', displayName: 'dark' }
          ]}
          onSelect={o => updateTheme({ fontSize: o.value })}
          optionName="Theme"
          defaultValue={color || 'Please select a color'}
        />
        <Select
          options={Array(15)
            .fill(0)
            .map((n, idx) => ({ displayName: (idx + 8).toString(), value: (idx + 8).toString() }))}
          onSelect={o => updateTheme({ color: o.value })}
          optionName="Font Size"
          defaultValue={fontSize || 'Please select a font size'}
        />
      </S.SettingsContent>
    </S.SettingsContainer>
  );
}

export default forwardRef(Settings as React.FC<Props>);
