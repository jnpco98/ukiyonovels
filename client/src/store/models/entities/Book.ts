import Entity from './Entity';

export interface Book extends Entity {
  title: string;
  description: string;
  novel: string;
}
