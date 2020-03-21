import { Resolver } from 'type-graphql';
import { BaseNovelDeleteResolver } from './novel-base';

/**
 * Novel Delete Resolver
 *
 * Archives/Mark for deletion the selected resource
 */
@Resolver()
export class NovelDeleteResolver extends BaseNovelDeleteResolver {}
