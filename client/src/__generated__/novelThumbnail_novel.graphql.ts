/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type novelThumbnail_novel = {
  readonly slug: string | null;
  readonly title: string | null;
  readonly genres: string | null;
  readonly coverImage: string | null;
  readonly type: string | null;
  readonly ' $refType': 'novelThumbnail_novel';
};
export type novelThumbnail_novel$data = novelThumbnail_novel;
export type novelThumbnail_novel$key = {
  readonly ' $data'?: novelThumbnail_novel$data;
  readonly ' $fragmentRefs': FragmentRefs<'novelThumbnail_novel'>;
};

const node: ReaderFragment = {
  kind: 'Fragment',
  name: 'novelThumbnail_novel',
  type: 'Novel',
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: 'ScalarField',
      alias: null,
      name: 'slug',
      args: null,
      storageKey: null
    },
    {
      kind: 'ScalarField',
      alias: null,
      name: 'title',
      args: null,
      storageKey: null
    },
    {
      kind: 'ScalarField',
      alias: null,
      name: 'genres',
      args: null,
      storageKey: null
    },
    {
      kind: 'ScalarField',
      alias: null,
      name: 'coverImage',
      args: null,
      storageKey: null
    },
    {
      kind: 'ScalarField',
      alias: null,
      name: 'type',
      args: null,
      storageKey: null
    }
  ]
} as any;
(node as any).hash = 'b5e44323c466cd47f907841f5711f27d';
export default node;
