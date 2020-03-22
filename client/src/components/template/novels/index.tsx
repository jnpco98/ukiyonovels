import React, { ReactElement } from 'react';
import NovelList from '../../organism/novel-list';
import * as S from './style';

const novels = [
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
    { title: 'A Goblin\'s Evolution', link: '/' },
]

const List: React.FC = (): ReactElement => {
    return (
        <S.NovelsContainer>
            <S.NovelsWrapper>
                <S.NovelTitle>Novel List</S.NovelTitle>
                <NovelList contents={[...novels, ...novels, ...novels]}/>
            </S.NovelsWrapper>
            <S.NovelsSidePanel/>
        </S.NovelsContainer>
    );
};

export default List;
