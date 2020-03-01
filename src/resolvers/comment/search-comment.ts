import { Resolver } from "type-graphql";
import { BaseSearchResolver } from "./comment-base";

@Resolver()
export class CommentSearchResolver extends BaseSearchResolver {}