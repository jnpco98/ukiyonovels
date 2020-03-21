import { Resolver } from 'type-graphql';
import { BaseChapterGetResolver } from './chapter-base';

/**
 * Chapter Get Resolver
 *
 * Gets a single resource using the resource id
 */
@Resolver()
export class ChapterGetResolver extends BaseChapterGetResolver {}
