/* tslint:disable */
/* eslint-disable */
/* @relayHash 49ae77aa4851a7e50b87cde3407bb016 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
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
export type searchQueryVariables = {
    novelWhere?: NovelWhere | null;
    novelSearchCount?: number | null;
};
export type searchQueryResponse = {
    readonly search: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"novelThumbnail_novel">;
            };
        }>;
    } | null;
};
export type searchQuery = {
    readonly response: searchQueryResponse;
    readonly variables: searchQueryVariables;
};



/*
query searchQuery(
  $novelWhere: NovelWhere
  $novelSearchCount: Float
) {
  search: novels(where: $novelWhere, first: $novelSearchCount) {
    edges {
      node {
        id
        ...novelThumbnail_novel
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

fragment novelThumbnail_novel on Novel {
  slug
  title
  genres
  coverImage
  type
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "novelWhere",
            "type": "NovelWhere",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "novelSearchCount",
            "type": "Float",
            "defaultValue": null
        } as any)
    ], v1 = ({
        "kind": "Variable",
        "name": "where",
        "variableName": "novelWhere"
    } as any), v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
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
    } as any), v6 = [
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "novelSearchCount"
        } as any),
        (v1 /*: any*/)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "searchQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "search",
                    "name": "__novels_search_connection",
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
                                        {
                                            "kind": "FragmentSpread",
                                            "name": "novelThumbnail_novel",
                                            "args": null
                                        }
                                    ]
                                },
                                (v4 /*: any*/)
                            ]
                        },
                        (v5 /*: any*/)
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "searchQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "search",
                    "name": "novels",
                    "storageKey": null,
                    "args": (v6 /*: any*/),
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
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "slug",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "title",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "genres",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "coverImage",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "type",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        (v3 /*: any*/)
                                    ]
                                },
                                (v4 /*: any*/)
                            ]
                        },
                        (v5 /*: any*/)
                    ]
                },
                {
                    "kind": "LinkedHandle",
                    "alias": "search",
                    "name": "novels",
                    "args": (v6 /*: any*/),
                    "handle": "connection",
                    "key": "novels_search",
                    "filters": [
                        "where"
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "searchQuery",
            "id": null,
            "text": "query searchQuery(\n  $novelWhere: NovelWhere\n  $novelSearchCount: Float\n) {\n  search: novels(where: $novelWhere, first: $novelSearchCount) {\n    edges {\n      node {\n        id\n        ...novelThumbnail_novel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelThumbnail_novel on Novel {\n  slug\n  title\n  genres\n  coverImage\n  type\n}\n",
            "metadata": {
                "connection": [
                    {
                        "count": "novelSearchCount",
                        "cursor": null,
                        "direction": "forward",
                        "path": [
                            "search"
                        ]
                    }
                ]
            }
        }
    } as any;
})();
(node as any).hash = '700017402fb96234fabed6b13da5c1db';
export default node;
