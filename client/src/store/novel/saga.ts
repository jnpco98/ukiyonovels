import { put, call, takeLatest } from 'redux-saga/effects';
import Novel from '../models/entities/novel';
import axios from 'axios';
import queryString from 'query-string';
import {
  fetchNovelAsync,
  fetchNovelsPaginatedAsync,
  searchNovelsAsync,
  addNovelAsync,
  updateNovelAsync,
  deleteNovelAsync
} from './action';

interface HttpResponse {
  success: boolean;
  statusCode: number;
  message: string;
}

// https://localhost:5001/api/novel/5e358013abfbf100873f7f06 | json
function* fetchNovelSaga(action: ReturnType<typeof fetchNovelAsync.request>) {
  try {
    const response: HttpResponse & { data: Novel } = yield call(() =>
      axios.get(`https://localhost:5001/api/novel/${action.payload.id}`).then(res => res.data)
    );
    if (!response.success) throw new Error(response.message);
    yield put(fetchNovelAsync.success(response.data));
  } catch (error) {
    yield put(fetchNovelAsync.failure(error));
  }
}

// https://localhost:5001/api/novel?count=2&page=0 | json
function* fetchNovelsPaginatedSaga(action: ReturnType<typeof fetchNovelsPaginatedAsync.request>) {
  const query = queryString.stringify({ ...action.payload.query }, { arrayFormat: 'comma' });

  try {
    const response: HttpResponse & { data: Novel[] } = yield call(() =>
      axios.get(`https://localhost:5001/api/novel?${query}`).then(res => res.data)
    );
    console.log(response);
    if (!response.success) throw new Error(response.message);
    yield put(fetchNovelsPaginatedAsync.success(response.data));
  } catch (error) {
    yield put(fetchNovelsPaginatedAsync.failure(error));
  }
}

// curl https://localhost:5001/api/novel?count=2&page=0&genre=action,seinen&tag=magic | json
function* searchNovelsSaga(action: ReturnType<typeof searchNovelsAsync.request>) {
  const query = queryString.stringify({ ...action.payload.query }, { arrayFormat: 'comma' });

  try {
    const response: HttpResponse & { data: Novel[] } = yield call(() =>
      axios.get(`https://localhost:5001/api/novel?${query}`).then(res => res.data)
    );
    if (!response.success) throw new Error(response.message);
    yield put(searchNovelsAsync.success(response.data));
  } catch (error) {
    yield put(searchNovelsAsync.failure(error));
  }
}

// curl -d "{ \"title\":\"This is a new novel\",\"description\":\"This is a novel posted from curl\"}" -H "Content-Type: application/json" -X POST https://localhost:5001/api/novel | json
function* addNovelSaga(action: ReturnType<typeof addNovelAsync.request>) {
  try {
    const response: HttpResponse & { data: { entities: Novel[]; created: number } } = yield call(() =>
      axios.post(`https://localhost:5001/api/novel`, { ...action.payload.novel }).then(res => res.data)
    );
    if (!response.success) throw new Error(response.message);
    yield put(addNovelAsync.success(response.data.entities[0]));
  } catch (error) {
    yield put(addNovelAsync.failure(error));
  }
}

// curl -d "{\"id\":\"5e3a9add96c1616508bd7ff1\",\"title\":\"This is a new novel\",\"description\":\"This is a novel posted from curl PRT\"}" -H "Content-Type: application/json" -X PUT https://localhost:5001/api/novel?id=5e3a9add96c1616508bd7ff1 | json
function* updateNovelSaga(action: ReturnType<typeof updateNovelAsync.request>) {
  try {
    const response: HttpResponse & { data: { entities: Novel[]; modified: number } } = yield call(() =>
      axios.put(`https://localhost:5001/api/novel`, { ...action.payload.novel }).then(res => res.data)
    );
    if (!response.success) throw new Error(response.message);
    yield put(updateNovelAsync.success(response.data.entities[0]));
  } catch (error) {
    yield put(updateNovelAsync.failure(error));
  }
}

// curl -X DELETE "https://localhost:5001/api/novel/5e3a9add96c1616508bd7ff1" | json
function* deleteNovelSaga(action: ReturnType<typeof deleteNovelAsync.request>) {
  try {
    const response: HttpResponse & { data: { entities: Novel[]; modified: number } } = yield call(() =>
      axios.delete(`https://localhost:5001/api/novel/${action.payload.id}`).then(res => res.data)
    );
    if (!response.success) throw new Error(response.message);
    yield put(deleteNovelAsync.success(response.data.entities[0]));
  } catch (error) {
    yield put(deleteNovelAsync.failure(error));
  }
}

const novelsSaga = [
  takeLatest(fetchNovelAsync.request, fetchNovelSaga),
  takeLatest(fetchNovelsPaginatedAsync.request, fetchNovelsPaginatedSaga),
  takeLatest(searchNovelsAsync.request, searchNovelsSaga),
  takeLatest(addNovelAsync.request, addNovelSaga),
  takeLatest(updateNovelAsync.request, updateNovelSaga),
  takeLatest(deleteNovelAsync.request, deleteNovelSaga)
];

export default novelsSaga;
