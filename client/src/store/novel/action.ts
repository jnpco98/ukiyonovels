import { createAsyncAction, ActionType } from "typesafe-actions";
import Novel, { NovelQuery } from "../models/entities/novel";
import { BaseQuery } from "../models/entities/Entity";

export const fetchNovelAsync = createAsyncAction(
    '@novel/FETCH_REQUEST', '@novel/FETCH_SUCCESS', '@novel/FETCH_FAILURE', '@novel/FETCH_CANCEL'
)<{ id: string }, Novel, Error>();

export const fetchNovelsPaginatedAsync = createAsyncAction(
    '@novel/FETCH_PAGINATED_REQUEST', '@novel/FETCH_PAGINATED_SUCCESS', '@novel/FETCH_PAGINATED_FAILURE', '@novel/FETCH_PAGINATED_CANCEL'
)<{ query: BaseQuery }, Novel[], Error>();

export const searchNovelsAsync = createAsyncAction(
    '@novel/SEARCH_REQUEST', '@novel/SEARCH_SUCCESS', '@novel/SEARCH_FAILURE', '@novel/SEARCH_CANCEL'
)<{ query: NovelQuery }, Novel[], Error>();

export const addNovelAsync = createAsyncAction(
    '@novel/ADD_REQUEST', '@novel/ADD_SUCCESS', '@novel/ADD_FAILURE', '@novel/ADD_CANCEL'
)<{ novel: Novel }, Novel, Error>();

export const updateNovelAsync = createAsyncAction(
    '@novel/UPDATE_REQUEST', '@novel/UPDATE_SUCCESS', '@novel/UPDATE_FAILURE', '@novel/UPDATE_CANCEL'
)<{ novel: Novel }, Novel, Error>();

export const deleteNovelAsync = createAsyncAction(
    '@novel/DELETE_REQUEST', '@novel/DELETE_SUCCESS', '@novel/DELETE_FAILURE, @novel/DELETE_CANCEL'
)<{ id: string }, Novel, Error>();

export type NovelActionType = 
    | ActionType<typeof fetchNovelAsync>
    | ActionType<typeof fetchNovelsPaginatedAsync>
    | ActionType<typeof searchNovelsAsync>
    | ActionType<typeof addNovelAsync>
    | ActionType<typeof updateNovelAsync>
    | ActionType<typeof deleteNovelAsync>;