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
    description?: string;

    slug: string;
  
    /**
     * Value should be one of the values
     * specified above {novelTypes}
     */
    type: string;
  
    /**
     * Comma separated tags
     * ex: "\"Tag1\",\"Tag2 with space\""
     */
    tags?: string;
  
    /**
     * Comma separated genres
     * ex: "\"Genre1\",\"Genre2 with space\""
     */
    genres?: string;
  
    /**
     * Comma separated origins
     * ex: "\"Origin1\",\"Origin2 with space\""
     */
    origins?: string;
  
    /**
     * Comma separated authors
     * ex: "\"Author1\", \"Author2 with space\""
     */
    authors?: string;
  
    /**
     * Comma separated artists
     * ex: "\"Artist1\", \"Artist2 with space\""
     */
    artists?: string;
  
    /**
     * Comma separated related novels
     * ex: "\"Related1\", \"Related2 with space\""
     */
    relatedNovels?: string;
  
    /**
     * Comma separated associated names
     * ex: "\"Associated1\", \"Associcated2 with space\""
     */
    associatedNames?: string;
  
    /**
     * Comma separated associated names
     * ex: "\"Alternative1\", \"Alternative2 with space\""
     */
    alternativeNames?: string;
  
    /**
     * Comma separated media gallery
     * Novel image collection
     * ex: "\"Media1\", \"Media2 with space\""
     */
    mediaGallery?: string;
  
    /**
     * Featured image
     * ex: "Imageurl"
     */
    coverImage?: string;
  
    /**
     * Number of likes
     */
    likes?: number;
  
    /**
     * Controller number of views
     * Not auto incremented
     *
     * Implementation is based on the frontend
     */
    views?: number;
  
    /**
     * Publish date
     * ex: 2000
     */
    year?: number;
  
    /**
     * Value should be one of the values
     * specified above {novelStatus}
     */
    status?: string;  
}

export interface NovelFilter {
    name: string;
}