import { NovelActionType } from '../store/novel/action';

declare module 'typesafe-actions' {
    interface Types {
        RootAction: NovelActionType;
    }
}