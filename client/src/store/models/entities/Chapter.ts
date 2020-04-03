import Entity from './Entity';

export interface Chapter extends Entity {
  title: string;
  description: string;
  content: string;
  novel: string;
  book: string;
}
