import React, { ReactElement } from 'react';
import * as S from './style';
import NovelCardList from '../../organism/novel-card-list';

const infoCardContent = [
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    },
    {
        title: 'Death March to the Parallel World Rhapsody',
        link: '#',
        imgSrc:
            'https://vignette.wikia.nocookie.net/deathmarch/images/6/68/Arisa2.jpg/revision/latest?cb=20191211193108',
        description: `
        In Taishō-era Japan, Tanjirō Kamado is a kindhearted and intelligent boy who lives with his family.
        He has become his family's sole source of income after the passing of his father. Everything
        changes when his family is attacked and slaughtered by a demon. Tanjirō and his sister Nezuko are
        the sole survivors of the incident, with Nezuko being transformed into a demon, but still
        surprisingly showing signs of human emotion and thought. After an encounter with Giyu Tomioka, a
        demon slayer, Tanjirō is recruited by Giyu to also become a demon slayer to help his sister turn
        human again and avenge the deaths of the rest of his family.`,
        meta: {
            updatedOn: `45 mins ago`,
            likesCount: `2.5k`,
            viewsCount: `12k`
        }
    }
];

const SearchPage: React.FC = (): ReactElement => {
    return (
        <S.SearchContainer>
            <S.SearchWrapper>
                <S.SearchTitle>Search Results</S.SearchTitle>
                {/* <InfoCardList content={infoCardContent} /> */}
            </S.SearchWrapper>
            <S.SearchSidePanel/>
        </S.SearchContainer>
    );
};

export default SearchPage;