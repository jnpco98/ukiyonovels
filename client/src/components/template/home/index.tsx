import React, { ReactElement, useEffect, useState } from 'react';
import InfoCardList from '../../organism/info-card-list';
import { homepage } from '../../../settings/config/settings.json';
import * as S from './style';
import { useSelector } from '../../../store';
import { useDispatch } from 'react-redux';
import { searchNovelsAsync } from '../../../store/novel/action';
import Novel from '../../../store/models/entities/Novel';
import Loader, { LoaderType } from '../../atom/loaders';

const Home: React.FC = (): ReactElement => {
    const { data, error, loading } = useSelector(state => state.novels);
    const dispatch = useDispatch();
    
    const featuredNovels: Novel[] = (Object.values(data) as Novel[]).sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime());


    const [fetchPage, setFetchPage] = useState(1);

    useEffect(() => {
        dispatch(searchNovelsAsync.request({ query: { count: 25, page: fetchPage, order: 'asc', sort: 'title' } }));
        dispatch(searchNovelsAsync.request({ query: { count: 25, page: fetchPage, order: 'desc', sort: 'lastmodified' } }));
    }, [fetchPage]);

    return (
        <>
            <S.HomeBanner contents={homepage.heroBanner} />
            <S.HomeContainer>
                <S.HomeWrapper>
                    {
                        loading || error ? <Loader type={LoaderType.Ring} /> :
                        <>
                            <S.HomeInfoThumbnailCarousel content={featuredNovels} headingText={homepage.featuredNovels.headingText} />
                            <InfoCardList content={featuredNovels} headingText={homepage.latestRelease.headingText} buttonText={homepage.latestRelease.actionButtonText} />
                        </>
                    }
                </S.HomeWrapper>
                <S.HomeSidePanel/>
            </S.HomeContainer>
        </>
    );
};

export default Home;
