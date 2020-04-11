/* tslint:disable */
/* eslint-disable */
/* @relayHash 217e6969dd82c59d1d30bf92a4b38f77 */

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
export type novelCardListQueryVariables = {
    novelsSort?: string | null;
    novelsCount?: number | null;
    novelWhere?: NovelWhere | null;
    novelReverse?: boolean | null;
    novelAfter?: string | null;
};
export type novelCardListQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"novelCardList_novels">;
};
export type novelCardListQuery = {
    readonly response: novelCardListQueryResponse;
    readonly variables: novelCardListQueryVariables;
};



/*
query novelCardListQuery(
  $novelsSort: String
  $novelsCount: Float
  $novelWhere: NovelWhere
  $novelReverse: Boolean
  $novelAfter: String
) {
  ...novelCardList_novels_1bgGce
}

fragment novelCardList_novels_1bgGce on Query {
  novelCardList: novels(first: $novelsCount, after: $novelAfter, sortKey: $novelsSort, where: $novelWhere, reverse: $novelReverse) {
    edges {
      node {
        id
        slug
        ...novelCard_novel
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

fragment novelCard_novel on Novel {
  slug
  title
  description
  coverImage
  type
  likes
  views
  lastModified
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "novelsSort",
            "type": "String",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "novelsCount",
            "type": "Float",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "novelWhere",
            "type": "NovelWhere",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "novelReverse",
            "type": "Boolean",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "novelAfter",
            "type": "String",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "after",
            "variableName": "novelAfter"
        } as any),
        ({
            "kind": "Variable",
            "name": "first",
            "variableName": "novelsCount"
        } as any),
        ({
            "kind": "Variable",
            "name": "reverse",
            "variableName": "novelReverse"
        } as any),
        ({
            "kind": "Variable",
            "name": "sortKey",
            "variableName": "novelsSort"
        } as any),
        ({
            "kind": "Variable",
            "name": "where",
            "variableName": "novelWhere"
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "novelCardListQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "FragmentSpread",
                    "name": "novelCardList_novels",
                    "args": (v1 /*: any*/)
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "novelCardListQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "novelCardList",
                    "name": "novels",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
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
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "id",
                                            "args": null,
                                            "storageKey": null
                                        },
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
                                            "name": "description",
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
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "likes",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "views",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "lastModified",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "__typename",
                                            "args": null,
                                            "storageKey": null
                                        }
                                    ]
                                },
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "cursor",
                                    "args": null,
                                    "storageKey": null
                                }
                            ]
                        },
                        {
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
                        }
                    ]
                },
                {
                    "kind": "LinkedHandle",
                    "alias": "novelCardList",
                    "name": "novels",
                    "args": (v1 /*: any*/),
                    "handle": "connection",
                    "key": "novels_novelCardList",
                    "filters": [
                        "sortKey",
                        "where",
                        "reverse"
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "novelCardListQuery",
            "id": null,
            "text": "query novelCardListQuery(\n  $novelsSort: String\n  $novelsCount: Float\n  $novelWhere: NovelWhere\n  $novelReverse: Boolean\n  $novelAfter: String\n) {\n  ...novelCardList_novels_1bgGce\n}\n\nfragment novelCardList_novels_1bgGce on Query {\n  novelCardList: novels(first: $novelsCount, after: $novelAfter, sortKey: $novelsSort, where: $novelWhere, reverse: $novelReverse) {\n    edges {\n      node {\n        id\n        slug\n        ...novelCard_novel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelCard_novel on Novel {\n  slug\n  title\n  description\n  coverImage\n  type\n  likes\n  views\n  lastModified\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'd2407f4bcb3bc6edb67c93ddf1ffba2a';
export default node;
