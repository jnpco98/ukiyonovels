/* tslint:disable */
/* eslint-disable */
/* @relayHash 6fde98b372c65fce9ebfb754a1dac459 */

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
export type homeQueryVariables = {
    novelThumbnailCarouselSort?: string | null;
    novelThumbnailCarouselCount?: number | null;
    novelsCount?: number | null;
    novelsSort?: string | null;
    novelWhere?: NovelWhere | null;
    novelReverse?: boolean | null;
    novelAfter?: string | null;
};
export type homeQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"novelThumbnailCarousel_default" | "novelThumbnailCarousel_latest" | "novelCardList_novels">;
};
export type homeQuery = {
    readonly response: homeQueryResponse;
    readonly variables: homeQueryVariables;
};



/*
query homeQuery(
  $novelThumbnailCarouselSort: String
  $novelThumbnailCarouselCount: Float
  $novelsCount: Float
  $novelsSort: String
  $novelWhere: NovelWhere
  $novelReverse: Boolean
  $novelAfter: String
) {
  ...novelThumbnailCarousel_default
  ...novelThumbnailCarousel_latest
  ...novelCardList_novels
}

fragment novelCardList_novels on Query {
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

fragment novelThumbnailCarousel_default on Query {
  novelThumbnailCarousel: novels(first: $novelThumbnailCarouselCount, sortKey: $novelThumbnailCarouselSort) {
    edges {
      node {
        id
        slug
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

fragment novelThumbnailCarousel_latest on Query {
  latestNovelThumbnailCarousel: novels(first: 10, sortKey: "year") {
    edges {
      node {
        id
        slug
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
            "name": "novelThumbnailCarouselSort",
            "type": "String",
            "defaultValue": null
        } as any),
        ({
            "kind": "LocalArgument",
            "name": "novelThumbnailCarouselCount",
            "type": "Float",
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
            "name": "novelsSort",
            "type": "String",
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
            "name": "first",
            "variableName": "novelThumbnailCarouselCount"
        } as any),
        ({
            "kind": "Variable",
            "name": "sortKey",
            "variableName": "novelThumbnailCarouselSort"
        } as any)
    ], v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "slug",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "coverImage",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
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
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "genres",
                            "args": null,
                            "storageKey": null
                        },
                        (v5 /*: any*/),
                        (v6 /*: any*/),
                        (v7 /*: any*/)
                    ]
                },
                (v8 /*: any*/)
            ]
        } as any),
        (v9 /*: any*/)
    ], v11 = [
        "sortKey"
    ], v12 = [
        ({
            "kind": "Literal",
            "name": "first",
            "value": 10
        } as any),
        ({
            "kind": "Literal",
            "name": "sortKey",
            "value": "year"
        } as any)
    ], v13 = [
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
            "name": "homeQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "FragmentSpread",
                    "name": "novelThumbnailCarousel_default",
                    "args": null
                },
                {
                    "kind": "FragmentSpread",
                    "name": "novelThumbnailCarousel_latest",
                    "args": null
                },
                {
                    "kind": "FragmentSpread",
                    "name": "novelCardList_novels",
                    "args": null
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "homeQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "novelThumbnailCarousel",
                    "name": "novels",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "NovelConnection",
                    "plural": false,
                    "selections": (v10 /*: any*/)
                },
                {
                    "kind": "LinkedHandle",
                    "alias": "novelThumbnailCarousel",
                    "name": "novels",
                    "args": (v1 /*: any*/),
                    "handle": "connection",
                    "key": "novel_novelThumbnailCarousel",
                    "filters": (v11 /*: any*/)
                },
                {
                    "kind": "LinkedField",
                    "alias": "latestNovelThumbnailCarousel",
                    "name": "novels",
                    "storageKey": "novels(first:10,sortKey:\"year\")",
                    "args": (v12 /*: any*/),
                    "concreteType": "NovelConnection",
                    "plural": false,
                    "selections": (v10 /*: any*/)
                },
                {
                    "kind": "LinkedHandle",
                    "alias": "latestNovelThumbnailCarousel",
                    "name": "novels",
                    "args": (v12 /*: any*/),
                    "handle": "connection",
                    "key": "novel_latestNovelThumbnailCarousel",
                    "filters": (v11 /*: any*/)
                },
                {
                    "kind": "LinkedField",
                    "alias": "novelCardList",
                    "name": "novels",
                    "storageKey": null,
                    "args": (v13 /*: any*/),
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
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "description",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        (v5 /*: any*/),
                                        (v6 /*: any*/),
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
                    "alias": "novelCardList",
                    "name": "novels",
                    "args": (v13 /*: any*/),
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
            "name": "homeQuery",
            "id": null,
            "text": "query homeQuery(\n  $novelThumbnailCarouselSort: String\n  $novelThumbnailCarouselCount: Float\n  $novelsCount: Float\n  $novelsSort: String\n  $novelWhere: NovelWhere\n  $novelReverse: Boolean\n  $novelAfter: String\n) {\n  ...novelThumbnailCarousel_default\n  ...novelThumbnailCarousel_latest\n  ...novelCardList_novels\n}\n\nfragment novelCardList_novels on Query {\n  novelCardList: novels(first: $novelsCount, after: $novelAfter, sortKey: $novelsSort, where: $novelWhere, reverse: $novelReverse) {\n    edges {\n      node {\n        id\n        slug\n        ...novelCard_novel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelCard_novel on Novel {\n  slug\n  title\n  description\n  coverImage\n  type\n  likes\n  views\n  lastModified\n}\n\nfragment novelThumbnailCarousel_default on Query {\n  novelThumbnailCarousel: novels(first: $novelThumbnailCarouselCount, sortKey: $novelThumbnailCarouselSort) {\n    edges {\n      node {\n        id\n        slug\n        ...novelThumbnail_novel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelThumbnailCarousel_latest on Query {\n  latestNovelThumbnailCarousel: novels(first: 10, sortKey: \"year\") {\n    edges {\n      node {\n        id\n        slug\n        ...novelThumbnail_novel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelThumbnail_novel on Novel {\n  slug\n  title\n  genres\n  coverImage\n  type\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '92b17042208658d2408b64c5556bbe4e';
export default node;
