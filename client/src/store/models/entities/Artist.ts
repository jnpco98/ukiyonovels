import { NovelFilter } from "./novel";

export default interface Artist extends NovelFilter {
    alterateNames: string[];
}
