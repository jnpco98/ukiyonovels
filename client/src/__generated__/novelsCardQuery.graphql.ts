/* tslint:disable */
/* eslint-disable */
/* @relayHash f5e0a3b61594454d4ce8811431f0f337 */

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
export type novelsCardQueryVariables = {
    novelsSort?: string | null;
    novelsCount?: number | null;
    novelWhere?: NovelWhere | null;
    novelReverse?: boolean | null;
};
export type novelsCardQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"novelCardList_novels">;
};
export type novelsCardQuery = {
    readonly response: novelsCardQueryResponse;
    readonly variables: novelsCardQueryVariables;
};



/*
query novelsCardQuery(
  $novelsSort: String
  $novelsCount: Float
  $novelWhere: NovelWhere
  $novelReverse: Boolean
) {
  ...novelCardList_novels
}

fragment novelCardList_novels on Query {
  novelCardList: novels(first: $novelsCount, sortKey: $novelsSort, where: $novelWhere, reverse: $novelReverse) {
    edges {
      node {
        id
        slug
        ...novelCard_novel
      }
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
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "novelsCardQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "FragmentSpread",
                    "name": "novelCardList_novels",
                    "args": null
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "novelsCardQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "novelCardList",
                    "name": "novels",
                    "storageKey": null,
                    "args": [
                        {
                            "kind": "Variable",
                            "name": "first",
                            "variableName": "novelsCount"
                        },
                        {
                            "kind": "Variable",
                            "name": "reverse",
                            "variableName": "novelReverse"
                        },
                        {
                            "kind": "Variable",
                            "name": "sortKey",
                            "variableName": "novelsSort"
                        },
                        {
                            "kind": "Variable",
                            "name": "where",
                            "variableName": "novelWhere"
                        }
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
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "novelsCardQuery",
            "id": null,
            "text": "query novelsCardQuery(\n  $novelsSort: String\n  $novelsCount: Float\n  $novelWhere: NovelWhere\n  $novelReverse: Boolean\n) {\n  ...novelCardList_novels\n}\n\nfragment novelCardList_novels on Query {\n  novelCardList: novels(first: $novelsCount, sortKey: $novelsSort, where: $novelWhere, reverse: $novelReverse) {\n    edges {\n      node {\n        id\n        slug\n        ...novelCard_novel\n      }\n    }\n  }\n}\n\nfragment novelCard_novel on Novel {\n  slug\n  title\n  description\n  coverImage\n  type\n  likes\n  views\n  lastModified\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '2d476f2454f68d3ed783b8cf9079039d';
export default node;
