import { Resolver } from "type-graphql";
import { BaseSearchResolver } from "./book-base";

@Resolver()
export class BookSearchResolver extends BaseSearchResolver {}