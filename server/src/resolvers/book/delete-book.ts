import { Resolver } from 'type-graphql';
import { BaseBookDeleteResolver } from './book-base';

/**
 * Book Delete Resolver
 * 
 * Archives/Mark for deletion the selected resource
 */
@Resolver()
export class BookDeleteResolver extends BaseBookDeleteResolver {}
