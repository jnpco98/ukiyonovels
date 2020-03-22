import Tag from "./Tag";
import Genre from "./Genre";
import Origin from "./Origin";
import Author from "./Author";
import Artist from "./Artist";
import Entity, { BaseQuery } from "./Entity";

export interface NovelQuery extends BaseQuery {
    tags?: string[];
    genres?: string[];
    origins?: string[];
    authors?: string[];
    artists?: string[];
}

export default interface Novel extends Entity {
    title: string;
    type: string;
    handle: string;
    description: string;
    tags: Tag[];
    genres: Genre[];
    origins: Origin[];
    authors: Author[];
    artists: Artist[];
    relatedNovels: string[];
    associatedNames: string[];
    mediaGallery: string[];
    coverImage: string[];
    likes: number;
    views: number;
}

export interface NovelFilter {
    name: string;
}