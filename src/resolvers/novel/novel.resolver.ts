import { createBaseResolver } from "../base/base-resolver";
import { Novel } from "../../entity/novel";
import { Resolver } from "type-graphql";

const BaseNovelResolver = createBaseResolver({ 
  EntityType: Novel,
  InputType: Novel,
  authorization: { 
    get: ["ADMIN"], 
  }, 
  resource: "novel" 
});

@Resolver()
export class NovelResolver extends BaseNovelResolver {
}