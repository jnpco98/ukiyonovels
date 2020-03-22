import { createReducer } from "typesafe-actions";
import Novel from "../models/entities/Novel";
import { fetchNovelAsync, fetchNovelsPaginatedAsync, searchNovelsAsync, addNovelAsync, updateNovelAsync, deleteNovelAsync } from "./action";
import { combineReducers } from "redux";

const loadingReducer = createReducer(false)
    .handleAction([
        fetchNovelAsync.request, fetchNovelsPaginatedAsync.request, searchNovelsAsync.request, addNovelAsync.request, updateNovelAsync.request, deleteNovelAsync.request
    ], (state, action) => true)
    .handleAction([
        fetchNovelAsync.success, fetchNovelsPaginatedAsync.success, searchNovelsAsync.success, addNovelAsync.success, updateNovelAsync.success, deleteNovelAsync.success,
        fetchNovelAsync.failure, fetchNovelsPaginatedAsync.failure, searchNovelsAsync.failure, addNovelAsync.failure, updateNovelAsync.failure, deleteNovelAsync.failure
    ], (state, action) => false);

const errorReducer = createReducer(null)
    .handleAction([
        fetchNovelAsync.failure, fetchNovelsPaginatedAsync.failure, searchNovelsAsync.failure, addNovelAsync.failure, updateNovelAsync.failure, deleteNovelAsync.failure
    ], (state, action) => action.payload);

const dataReducer = createReducer({})
    .handleAction([fetchNovelAsync.success, addNovelAsync.success, updateNovelAsync.success, deleteNovelAsync.success], (state, action) => ({ ...state,  [action.payload.handle]: action.payload }))
    .handleAction([fetchNovelsPaginatedAsync.success, searchNovelsAsync.success], (state, action) => ({ ...state, ...action.payload.reduce((acc, curr) => ((acc[curr.handle] = curr), acc), {} as { [key: string]: Novel }) }));

const novelsReducer = combineReducers({
    loading: loadingReducer,
    error: errorReducer,
    data: dataReducer
});

export default novelsReducer;