import Entity from './Entity';

export interface Comment extends Entity {
  message: string;
  chapter: string;
}
