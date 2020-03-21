import { createBaseResolver } from '../base/base-resolver';
import { Comment } from '../../entity/comment';
import ROLES from '../../constants/roles';
import { InputType, Field } from 'type-graphql';
import { StringWhere, NumberWhere } from '../../lib/query/where-type';
import { ContextHooks } from '../base/types/context-hooks';
import { BaseResolverParams } from '../base/types/resolver';

@InputType()
export class CommentQueryableInput {
  @Field(type => StringWhere, { nullable: true })
  content?: typeof StringWhere;
}

const authorization = {
  get: [ROLES.anonymous],
  paginate: [ROLES.anonymous],
  create: [ROLES.owner],
  update: [ROLES.owner],
  delete: [ROLES.owner]
};

const contextHooks: ContextHooks<Comment> = {};

const resolverConfig: BaseResolverParams<Comment, CommentQueryableInput, Comment> = {
  EntityType: Comment,
  QueryableInputType: CommentQueryableInput,
  MutationInputType: Comment,
  authorization,
  contextHooks,
  resource: 'comment'
};

const {
  ConnectionType,
  WhereInputType,
  BaseGetResolver,
  BaseSearchResolver,
  BaseCreateResolver,
  BaseUpdateResolver,
  BaseDeleteResolver
} = createBaseResolver(resolverConfig);

export {
  ConnectionType as CommentConnectionType,
  WhereInputType as CommentWhereInputType,
  BaseGetResolver as BaseCommentGetResolver,
  BaseSearchResolver as BaseCommentSearchResolver,
  BaseCreateResolver as BaseCommentCreateResolver,
  BaseUpdateResolver as BaseCommentUpdateResolver,
  BaseDeleteResolver as BaseCommentDeleteResolver
};
