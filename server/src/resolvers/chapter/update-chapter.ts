import { Resolver } from 'type-graphql';
import { BaseChapterUpdateResolver } from './chapter-base';

/**
 * Chapter Update Resolver
 * 
 * Updates a single resource using the 
 * resource id and the required input parameters
 */
@Resolver()
export class ChapterUpdateResolver extends BaseChapterUpdateResolver {}
