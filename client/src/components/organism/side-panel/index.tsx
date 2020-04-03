import React from 'react';
import * as S from './style';
import { sidePanel } from '../../../settings/config/settings.json';

type Props = {
  className?: string;
};

const SidePanel: React.FC<Props> = (props: Props) => {
  const { className } = props;

  return (
    <S.SidePanelContainer className={className}>
      {/* <S.SidePanelRatings headingText={sidePanel.popularNovels.headingText} contents={ratings} /> */}
      <S.SidePanelQuickSearch
        headingText={sidePanel.genres.headingText}
        contents={sidePanel.genres.contents.map(c => ({ title: c.title, link: c.link }))}
      />
      <S.SidePanelQuickSearch
        headingText={sidePanel.type.headingText}
        contents={sidePanel.type.contents.map(t => ({ title: t.title, link: t.link }))}
      />
    </S.SidePanelContainer>
  );
};

export default SidePanel;
