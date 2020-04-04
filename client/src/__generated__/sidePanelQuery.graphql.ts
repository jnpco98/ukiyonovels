/* tslint:disable */
/* eslint-disable */
/* @relayHash 9646bae9aea3667d7c5a8002f08e2a0e */

import { ConcreteRequest } from "relay-runtime";
export type NovelWhere = {
    AND?: Array<NovelQueryableInput> | null;
    OR?: Array<NovelQueryableInput> | null;
};
export type NovelQueryableInput = {
    title?: StringWhere | null;
    slug?: StringWhere | null;
    description?: StringWhere | null;
    type?: StringWhere | null;
    tags?: StringWhere | null;
    genres?: StringWhere | null;
    origins?: StringWhere | null;
    authors?: StringWhere | null;
    artists?: StringWhere | null;
    relatedNovels?: StringWhere | null;
    associatedNames?: StringWhere | null;
    alternativeNames?: StringWhere | null;
    status?: StringWhere | null;
    year?: NumberWhere | null;
    likes?: NumberWhere | null;
    views?: NumberWhere | null;
    rating?: NumberWhere | null;
};
export type StringWhere = {
    is?: string | null;
    not?: string | null;
    in?: Array<string> | null;
    notIn?: Array<string> | null;
    lt?: string | null;
    lte?: string | null;
    gt?: string | null;
    gte?: string | null;
    contains?: string | null;
    notContains?: string | null;
    startsWith?: string | null;
    notStartsWith?: string | null;
    endsWith?: string | null;
    notEndsWith?: string | null;
    search?: string | null;
};
export type NumberWhere = {
    is?: number | null;
    not?: number | null;
    in?: Array<number> | null;
    notIn?: Array<number> | null;
    lt?: number | null;
    lte?: number | null;
    gt?: number | null;
    gte?: number | null;
};
export type sidePanelQueryVariables = {
    sidePanelNovelCount?: number | null;
    sidePanelNovelSort?: string | null;
    sidePanelNovelReverse?: boolean | null;
    sidePanelNovelFilter?: NovelWhere | null;
};
export type sidePanelQueryResponse = {
    readonly popularNovels: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string | null;
                readonly title: string | null;
                readonly rating: number | null;
            };
        }>;
    } | null;
    readonly genres: ReadonlyArray<{
        readonly field: string | null;
        readonly count: number;
    }> | null;
    readonly status: ReadonlyArray<{
        readonly field: string | null;
        readonly count: number;
    }> | null;
    readonly types: ReadonlyArray<{
        readonly field: string | null;
        readonly count: number;
    }> | null;
    readonly tags: ReadonlyArray<{
        readonly field: string | null;
        readonly count: number;
    }> | null;
};
export type sidePanelQuery = {
    readonly response: sidePanelQueryResponse;
    readonly variables: sidePanelQueryVariables;
};



/*
query sidePanelQuery(
  $sidePanelNovelCount: Float
  $sidePanelNovelSort: String
  $sidePanelNovelReverse: Boolean
  $sidePanelNovelFilter: NovelWhere
) {
  popularNovels: novels(first: $sidePanelNovelCount, sortKey: $sidePanelNovelSort, reverse: $sidePanelNovelReverse, where: $sidePanelNovelFilter) {
    edges {
      node {
        slug
        title
        rating
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  genres: novelAggregateGenres {
    field
    count
  }
  status: novelAggregateStatus {
    field
    count
  }
  types: novelAggregateTypes {
    field
    count
  }
  tags: novelAggregateTags {
    field
    count
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "sidePanelNovelCount",
            "type": "Float",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "sidePanelNovelSort",
            "type": "String",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "sidePanelNovelReverse",
            "type": "Boolean",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "sidePanelNovelFilter",
            "type": "NovelWhere",
            "defaultValue": null
        } as any)
    ], v1 = ({
        "kind": "Variable",
        "name": "reverse",
        "variableName": "sidePanelNovelReverse"
    } as any), v2 = ({
        "kind": "Variable",
        "name": "sortKey",
        "variableName": "sidePanelNovelSort"
    } as any), v3 = ({
        "kind": "Variable",
        "name": "where",
        "variableName": "sidePanelNovelFilter"
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "slug",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "rating",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
        "kind": "LinkedField",
        "alias": null,
        "name": "pageInfo",
        "storageKey": null,
        "args": null,
        "concreteType": "PageInfo",
        "plural": false,
        "selections": [
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
            },
            {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
            }
        ]
    } as any), v10 = [
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "field",
            "args": null,
            "storageKey": null
        } as any),
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "count",
            "args": null,
            "storageKey": null
        } as any)
    ], v11 = ({
        "kind": "LinkedField",
        "alias": "genres",
        "name": "novelAggregateGenres",
        "storageKey": null,
        "args": null,
        "concreteType": "NovelAggregate",
        "plural": true,
        "selections": (v10 /*: any*/)
    } as any), v12 = ({
        "kind": "LinkedField",
        "alias": "status",
        "name": "novelAggregateStatus",
        "storageKey": null,
        "args": null,
        "concreteType": "NovelAggregate",
        "plural": true,
        "selections": (v10 /*: any*/)
    } as any), v13 = ({
        "kind": "LinkedField",
        "alias": "types",
        "name": "novelAggregateTypes",
        "storageKey": null,
        "args": null,
        "concreteType": "NovelAggregate",
        "plural": true,
        "selections": (v10 /*: any*/)
    } as any), v14 = ({
        "kind": "LinkedField",
        "alias": "tags",
        "name": "novelAggregateTags",
        "storageKey": null,
        "args": null,
        "concreteType": "NovelAggregate",
        "plural": true,
        "selections": (v10 /*: any*/)
    } as any), v15 = [
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "sidePanelNovelCount"
        } as any),
        (v1 /*: any*/),
        (v2 /*: any*/),
        (v3 /*: any*/)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "sidePanelQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "popularNovels",
                    "name": "__novel_popularNovels_connection",
                    "storageKey": null,
                    "args": [
                        (v1 /*: any*/),
                        (v2 /*: any*/),
                        (v3 /*: any*/)
                    ],
                    "concreteType": "NovelConnection",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "NovelEdge",
                            "plural": true,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "node",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Novel",
                                    "plural": false,
                                    "selections": [
                                        (v4 /*: any*/),
                                        (v5 /*: any*/),
                                        (v6 /*: any*/),
                                        (v7 /*: any*/)
                                    ]
                                },
                                (v8 /*: any*/)
                            ]
                        },
                        (v9 /*: any*/)
                    ]
                },
                (v11 /*: any*/),
                (v12 /*: any*/),
                (v13 /*: any*/),
                (v14 /*: any*/)
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "sidePanelQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "popularNovels",
                    "name": "novels",
                    "storageKey": null,
                    "args": (v15 /*: any*/),
                    "concreteType": "NovelConnection",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "NovelEdge",
                            "plural": true,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "node",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Novel",
                                    "plural": false,
                                    "selections": [
                                        (v4 /*: any*/),
                                        (v5 /*: any*/),
                                        (v6 /*: any*/),
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "id",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        (v7 /*: any*/)
                                    ]
                                },
                                (v8 /*: any*/)
                            ]
                        },
                        (v9 /*: any*/)
                    ]
                },
                {
                    "kind": "LinkedHandle",
                    "alias": "popularNovels",
                    "name": "novels",
                    "args": (v15 /*: any*/),
                    "handle": "connection",
                    "key": "novel_popularNovels",
                    "filters": [
                        "sortKey",
                        "reverse",
                        "where"
                    ]
                },
                (v11 /*: any*/),
                (v12 /*: any*/),
                (v13 /*: any*/),
                (v14 /*: any*/)
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "sidePanelQuery",
            "id": null,
            "text": "query sidePanelQuery(\n  $sidePanelNovelCount: Float\n  $sidePanelNovelSort: String\n  $sidePanelNovelReverse: Boolean\n  $sidePanelNovelFilter: NovelWhere\n) {\n  popularNovels: novels(first: $sidePanelNovelCount, sortKey: $sidePanelNovelSort, reverse: $sidePanelNovelReverse, where: $sidePanelNovelFilter) {\n    edges {\n      node {\n        slug\n        title\n        rating\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  genres: novelAggregateGenres {\n    field\n    count\n  }\n  status: novelAggregateStatus {\n    field\n    count\n  }\n  types: novelAggregateTypes {\n    field\n    count\n  }\n  tags: novelAggregateTags {\n    field\n    count\n  }\n}\n",
            "metadata": {
                "connection": [
                    {
                        "count": "sidePanelNovelCount",
                        "cursor": null,
                        "direction": "forward",
                        "path": [
                            "popularNovels"
                        ]
                    }
                ]
            }
        }
    } as any;
})();
(node as any).hash = 'ce9225bd76a8488e52813bb224ecd266';
export default node;
