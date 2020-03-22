import { NovelFilter } from "./Novel";

export default interface Author extends NovelFilter {
    alterateNames: string[];
}
