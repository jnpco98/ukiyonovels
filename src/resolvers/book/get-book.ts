import { Resolver } from "type-graphql";
import { BaseGetResolver } from "./book-base";

@Resolver()
export class BookGetResolver extends BaseGetResolver {}