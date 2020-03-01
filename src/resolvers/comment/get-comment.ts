import { Resolver } from "type-graphql";
import { BaseGetResolver } from "./comment-base";

@Resolver()
export class CommentGetResolver extends BaseGetResolver {}