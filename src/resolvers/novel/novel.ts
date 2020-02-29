import { createBaseResolver } from "../base/base-resolver-factory";
import { Novel } from "../../entity/novel";
import { InputType, Field, Resolver, ArgsType } from "type-graphql";
import { FindManyOptions } from "typeorm";
import { IsIn } from "class-validator";

@ArgsType()
class NovelArgs {
}

const BaseNovelResolver = createBaseResolver({ 
  EntityType: Novel, 
  InputType: Novel, 
  authorization: { 
    get: ["ADMIN"], 
  }, 
  resource: "Novel" 
});

@Resolver()
export class NovelResolver extends BaseNovelResolver {
  // buildFilterOptions(): FindManyOptions<Novel> {
  //   return {};
  // }
}