import { Resolver } from 'type-graphql';
import { BaseNovelGetResolver } from './novel-base';

/**
 * Novel Get Resolver
 * 
 * Gets a single resource using the resource id
 */
@Resolver()
export class NovelGetResolver extends BaseNovelGetResolver {}
