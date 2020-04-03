/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type novelThumbnailCarousel_latest = {
  readonly latestNovelThumbnailCarousel: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly slug: string | null;
        readonly ' $fragmentRefs': FragmentRefs<'novelThumbnail_novel'>;
      };
    }>;
  } | null;
  readonly ' $refType': 'novelThumbnailCarousel_latest';
};
export type novelThumbnailCarousel_latest$data = novelThumbnailCarousel_latest;
export type novelThumbnailCarousel_latest$key = {
  readonly ' $data'?: novelThumbnailCarousel_latest$data;
  readonly ' $fragmentRefs': FragmentRefs<'novelThumbnailCarousel_latest'>;
};

const node: ReaderFragment = {
  kind: 'Fragment',
  name: 'novelThumbnailCarousel_latest',
  type: 'Query',
  metadata: {
    connection: [
      {
        count: null,
        cursor: null,
        direction: 'forward',
        path: ['latestNovelThumbnailCarousel']
      }
    ]
  },
  argumentDefinitions: [],
  selections: [
    {
      kind: 'LinkedField',
      alias: 'latestNovelThumbnailCarousel',
      name: '__novel_latestNovelThumbnailCarousel_connection',
      storageKey: '__novel_latestNovelThumbnailCarousel_connection(sortKey:"year")',
      args: [
        {
          kind: 'Literal',
          name: 'sortKey',
          value: 'year'
        }
      ],
      concreteType: 'NovelConnection',
      plural: false,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'edges',
          storageKey: null,
          args: null,
          concreteType: 'NovelEdge',
          plural: true,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'node',
              storageKey: null,
              args: null,
              concreteType: 'Novel',
              plural: false,
              selections: [
                {
                  kind: 'ScalarField',
                  alias: null,
                  name: 'id',
                  args: null,
                  storageKey: null
                },
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
                  name: '__typename',
                  args: null,
                  storageKey: null
                },
                {
                  kind: 'FragmentSpread',
                  name: 'novelThumbnail_novel',
                  args: null
                }
              ]
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'cursor',
              args: null,
              storageKey: null
            }
          ]
        },
        {
          kind: 'LinkedField',
          alias: null,
          name: 'pageInfo',
          storageKey: null,
          args: null,
          concreteType: 'PageInfo',
          plural: false,
          selections: [
            {
              kind: 'ScalarField',
              alias: null,
              name: 'endCursor',
              args: null,
              storageKey: null
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'hasNextPage',
              args: null,
              storageKey: null
            }
          ]
        }
      ]
    }
  ]
} as any;
(node as any).hash = 'c4a1fbb27012e7d319284af0c6471459';
export default node;
