import { Resolver } from 'type-graphql';
import { BaseChapterDeleteResolver } from './chapter-base';

/**
 * Chapter Delete Resolver
 * 
 * Archives/Mark for deletion the selected resource
 */
@Resolver()
export class ChapterDeleteResolver extends BaseChapterDeleteResolver {}
