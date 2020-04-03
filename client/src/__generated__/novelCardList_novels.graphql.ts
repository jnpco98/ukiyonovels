/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from 'relay-runtime';
export type novelCardList_novels = {
  readonly novelCardList: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly slug: string | null;
        readonly ' $fragmentRefs': FragmentRefs<'novelCard_novel'>;
      };
    }>;
  } | null;
  readonly ' $refType': 'novelCardList_novels';
};
export type novelCardList_novels$data = novelCardList_novels;
export type novelCardList_novels$key = {
  readonly ' $data'?: novelCardList_novels$data;
  readonly ' $fragmentRefs': FragmentRefs<'novelCardList_novels'>;
};

const node: ReaderFragment = {
  kind: 'Fragment',
  name: 'novelCardList_novels',
  type: 'Query',
  metadata: {
    connection: [
      {
        count: null,
        cursor: null,
        direction: 'forward',
        path: ['novelCardList']
      }
    ]
  },
  argumentDefinitions: [],
  selections: [
    {
      kind: 'LinkedField',
      alias: 'novelCardList',
      name: '__novel_novelCardList_connection',
      storageKey: '__novel_novelCardList_connection(sortKey:"lastModified")',
      args: [
        {
          kind: 'Literal',
          name: 'sortKey',
          value: 'lastModified'
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
                  name: 'novelCard_novel',
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
(node as any).hash = 'd73591b2c7bc1c388744aacdcd3e85c5';
export default node;
