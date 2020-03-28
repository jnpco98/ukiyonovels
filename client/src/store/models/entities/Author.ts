import { NovelFilter } from "./novel";

export default interface Author extends NovelFilter {
    alterateNames: string[];
}
