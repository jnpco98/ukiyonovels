/* tslint:disable */
/* eslint-disable */
/* @relayHash 1dd0940db168884c0f7d2ce773626594 */

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
export type novelsQueryVariables = {
    novelsSort?: string | null;
    novelsCount?: number | null;
    novelWhere?: NovelWhere | null;
    novelReverse?: boolean | null;
};
export type novelsQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"novelList">;
};
export type novelsQuery = {
    readonly response: novelsQueryResponse;
    readonly variables: novelsQueryVariables;
};



/*
query novelsQuery(
  $novelsSort: String
  $novelsCount: Float
  $novelWhere: NovelWhere
  $novelReverse: Boolean
) {
  ...novelList
}

fragment novelList on Query {
  novels(first: $novelsCount, sortKey: $novelsSort, where: $novelWhere, reverse: $novelReverse) {
    edges {
      node {
        id
        slug
        title
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
        } as any)
    ], v1 = [
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
            "name": "novelsQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "FragmentSpread",
                    "name": "novelList",
                    "args": null
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "novelsQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
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
                    "alias": null,
                    "name": "novels",
                    "args": (v1 /*: any*/),
                    "handle": "connection",
                    "key": "novel_novels",
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
            "name": "novelsQuery",
            "id": null,
            "text": "query novelsQuery(\n  $novelsSort: String\n  $novelsCount: Float\n  $novelWhere: NovelWhere\n  $novelReverse: Boolean\n) {\n  ...novelList\n}\n\nfragment novelList on Query {\n  novels(first: $novelsCount, sortKey: $novelsSort, where: $novelWhere, reverse: $novelReverse) {\n    edges {\n      node {\n        id\n        slug\n        title\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'b1ee947f2fcde9509907ce25477a9d42';
export default node;
