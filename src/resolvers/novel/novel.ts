import { createBaseResolver } from "../base/base-resolver";
import { Novel } from "../../entity/novel";
import { Resolver } from "type-graphql";
import { NovelQueryableInput } from "./novel-input";

const BaseNovelResolver = createBaseResolver({ 
  EntityType: Novel,
  QueryableInputType: NovelQueryableInput,
  InputType: Novel,
  authorization: { 
    get: ["ADMIN"], 
  }, 
  resource: "novel" 
});

@Resolver()
export class NovelResolver extends BaseNovelResolver {
}