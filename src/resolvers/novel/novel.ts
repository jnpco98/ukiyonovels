import { createBaseResolver } from "../base/base-resolver";
import { Novel } from "../../entity/novel";
import { Resolver, ArgsType } from "type-graphql";

@ArgsType()
class NovelArgs {
}

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