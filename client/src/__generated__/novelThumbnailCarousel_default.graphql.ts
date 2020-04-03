/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type novelThumbnailCarousel_default = {
  readonly novelThumbnailCarousel: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly slug: string | null;
        readonly ' $fragmentRefs': FragmentRefs<'novelThumbnail_novel'>;
      };
    }>;
  } | null;
  readonly ' $refType': 'novelThumbnailCarousel_default';
};
export type novelThumbnailCarousel_default$data = novelThumbnailCarousel_default;
export type novelThumbnailCarousel_default$key = {
  readonly ' $data'?: novelThumbnailCarousel_default$data;
  readonly ' $fragmentRefs': FragmentRefs<'novelThumbnailCarousel_default'>;
};

const node: ReaderFragment = {
  kind: 'Fragment',
  name: 'novelThumbnailCarousel_default',
  type: 'Query',
  metadata: {
    connection: [
      {
        count: 'novelThumbnailCarouselCount',
        cursor: null,
        direction: 'forward',
        path: ['novelThumbnailCarousel']
      }
    ]
  },
  argumentDefinitions: [
    {
      kind: 'RootArgument',
      name: 'novelThumbnailCarouselCount',
      type: 'Float'
    },
    {
      kind: 'RootArgument',
      name: 'novelThumbnailCarouselSort',
      type: 'String'
    }
  ],
  selections: [
    {
      kind: 'LinkedField',
      alias: 'novelThumbnailCarousel',
      name: '__novel_novelThumbnailCarousel_connection',
      storageKey: null,
      args: [
        {
          kind: 'Variable',
          name: 'sortKey',
          variableName: 'novelThumbnailCarouselSort'
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
(node as any).hash = 'eac9760d44f3ec58d74c9c9b03c70eb6';
export default node;
