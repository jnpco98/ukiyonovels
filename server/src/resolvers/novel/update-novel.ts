import { Resolver } from 'type-graphql';
import { BaseNovelUpdateResolver } from './novel-base';

/**
 * Novel Update Resolver
 *
 * Updates a single resource using the
 * resource id and the required input parameters
 */
@Resolver()
export class NovelUpdateResolver extends BaseNovelUpdateResolver {}
