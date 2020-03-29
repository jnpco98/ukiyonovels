/* tslint:disable */
/* eslint-disable */
/* @relayHash b3fc86910413da50265e28bd186101e5 */

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
export type novelQueryVariables = {
    novelBySlug?: NovelWhere | null;
};
export type novelQueryResponse = {
    readonly result: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string | null;
                readonly title: string | null;
                readonly description: string | null;
                readonly type: string | null;
                readonly genres: string | null;
                readonly tags: string | null;
                readonly origins: string | null;
                readonly authors: string | null;
                readonly artists: string | null;
                readonly year: number | null;
                readonly status: string | null;
                readonly alternativeNames: string | null;
                readonly relatedNovels: string | null;
                readonly recommendedNovels: string | null;
                readonly coverImage: string | null;
            };
        }>;
    } | null;
};
export type novelQuery = {
    readonly response: novelQueryResponse;
    readonly variables: novelQueryVariables;
};



/*
query novelQuery(
  $novelBySlug: NovelWhere
) {
  result: novels(first: 1, where: $novelBySlug) {
    edges {
      node {
        slug
        title
        description
        type
        genres
        tags
        origins
        authors
        artists
        year
        status
        alternativeNames
        relatedNovels
        recommendedNovels
        coverImage
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
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "novelBySlug",
            "type": "NovelWhere",
            "defaultValue": null
        } as any)
    ], v1 = ({
        "kind": "Variable",
        "name": "where",
        "variableName": "novelBySlug"
    } as any), v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "slug",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "genres",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "tags",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "origins",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "authors",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "artists",
        "args": null,
        "storageKey": null
    } as any), v11 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "year",
        "args": null,
        "storageKey": null
    } as any), v12 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "status",
        "args": null,
        "storageKey": null
    } as any), v13 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "alternativeNames",
        "args": null,
        "storageKey": null
    } as any), v14 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "relatedNovels",
        "args": null,
        "storageKey": null
    } as any), v15 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "recommendedNovels",
        "args": null,
        "storageKey": null
    } as any), v16 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "coverImage",
        "args": null,
        "storageKey": null
    } as any), v17 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v18 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
    } as any), v19 = ({
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
    } as any), v20 = [
        ({
            "kind": "Literal",
            "name": "first",
            "value": 1
        } as any),
        (v1 /*: any*/)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "novelQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "result",
                    "name": "__novels_result_connection",
                    "storageKey": null,
                    "args": [
                        (v1 /*: any*/)
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
                                        (v2 /*: any*/),
                                        (v3 /*: any*/),
                                        (v4 /*: any*/),
                                        (v5 /*: any*/),
                                        (v6 /*: any*/),
                                        (v7 /*: any*/),
                                        (v8 /*: any*/),
                                        (v9 /*: any*/),
                                        (v10 /*: any*/),
                                        (v11 /*: any*/),
                                        (v12 /*: any*/),
                                        (v13 /*: any*/),
                                        (v14 /*: any*/),
                                        (v15 /*: any*/),
                                        (v16 /*: any*/),
                                        (v17 /*: any*/)
                                    ]
                                },
                                (v18 /*: any*/)
                            ]
                        },
                        (v19 /*: any*/)
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "novelQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "result",
                    "name": "novels",
                    "storageKey": null,
                    "args": (v20 /*: any*/),
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
                                        (v2 /*: any*/),
                                        (v3 /*: any*/),
                                        (v4 /*: any*/),
                                        (v5 /*: any*/),
                                        (v6 /*: any*/),
                                        (v7 /*: any*/),
                                        (v8 /*: any*/),
                                        (v9 /*: any*/),
                                        (v10 /*: any*/),
                                        (v11 /*: any*/),
                                        (v12 /*: any*/),
                                        (v13 /*: any*/),
                                        (v14 /*: any*/),
                                        (v15 /*: any*/),
                                        (v16 /*: any*/),
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "id",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        (v17 /*: any*/)
                                    ]
                                },
                                (v18 /*: any*/)
                            ]
                        },
                        (v19 /*: any*/)
                    ]
                },
                {
                    "kind": "LinkedHandle",
                    "alias": "result",
                    "name": "novels",
                    "args": (v20 /*: any*/),
                    "handle": "connection",
                    "key": "novels_result",
                    "filters": [
                        "where"
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "novelQuery",
            "id": null,
            "text": "query novelQuery(\n  $novelBySlug: NovelWhere\n) {\n  result: novels(first: 1, where: $novelBySlug) {\n    edges {\n      node {\n        slug\n        title\n        description\n        type\n        genres\n        tags\n        origins\n        authors\n        artists\n        year\n        status\n        alternativeNames\n        relatedNovels\n        recommendedNovels\n        coverImage\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            "metadata": {
                "connection": [
                    {
                        "count": null,
                        "cursor": null,
                        "direction": "forward",
                        "path": [
                            "result"
                        ]
                    }
                ]
            }
        }
    } as any;
})();
(node as any).hash = '477ad44117541e9fa84800448a55cca9';
export default node;
