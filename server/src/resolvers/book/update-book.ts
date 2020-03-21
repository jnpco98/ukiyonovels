import { Resolver } from 'type-graphql';
import { BaseBookUpdateResolver } from './book-base';

/**
 * Book Update Resolver
 *
 * Updates a single resource using the
 * resource id and the required input parameters
 */
@Resolver()
export class BookUpdateResolver extends BaseBookUpdateResolver {}
