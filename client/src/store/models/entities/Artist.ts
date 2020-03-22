import { NovelFilter } from "./Novel";

export default interface Artist extends NovelFilter {
    alterateNames: string[];
}
