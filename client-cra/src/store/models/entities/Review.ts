import Entity from './Entity';

export interface Review extends Entity {
  message: string;
  rating: number;
  novel: string;
}
