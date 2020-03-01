import { Resolver } from "type-graphql";
import { BaseDeleteResolver } from "./comment-base";

@Resolver()
export class CommentDeleteResolver extends BaseDeleteResolver {}