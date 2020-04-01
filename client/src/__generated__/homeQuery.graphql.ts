/* tslint:disable */
/* eslint-disable */
/* @relayHash 1701521ab2e81b494159c2b84d85c384 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type homeQueryVariables = {
    novelThumbnailCarouselSort?: string | null;
    novelThumbnailCarouselCount?: number | null;
};
export type homeQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"novelThumbnailCarousel_novels" | "novelCardList_novels">;
};
export type homeQuery = {
    readonly response: homeQueryResponse;
    readonly variables: homeQueryVariables;
};



/*
query homeQuery(
  $novelThumbnailCarouselSort: String
  $novelThumbnailCarouselCount: Float
) {
  ...novelThumbnailCarousel_novels
  ...novelCardList_novels
}

fragment novelCardList_novels on Query {
  novelCardList: novels(first: 20, sortKey: "lastModified") {
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

fragment novelThumbnailCarousel_novels on Query {
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
        "sortKey"
    ], v11 = [
        ({
            "kind": "Literal",
            "name": "first",
            "value": 20
        } as any),
        ({
            "kind": "Literal",
            "name": "sortKey",
            "value": "lastModified"
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
                    "name": "novelThumbnailCarousel_novels",
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
                        },
                        (v9 /*: any*/)
                    ]
                },
                {
                    "kind": "LinkedHandle",
                    "alias": "novelThumbnailCarousel",
                    "name": "novels",
                    "args": (v1 /*: any*/),
                    "handle": "connection",
                    "key": "novel_novelThumbnailCarousel",
                    "filters": (v10 /*: any*/)
                },
                {
                    "kind": "LinkedField",
                    "alias": "novelCardList",
                    "name": "novels",
                    "storageKey": "novels(first:20,sortKey:\"lastModified\")",
                    "args": (v11 /*: any*/),
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
                    "args": (v11 /*: any*/),
                    "handle": "connection",
                    "key": "novel_novelCardList",
                    "filters": (v10 /*: any*/)
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "homeQuery",
            "id": null,
            "text": "query homeQuery(\n  $novelThumbnailCarouselSort: String\n  $novelThumbnailCarouselCount: Float\n) {\n  ...novelThumbnailCarousel_novels\n  ...novelCardList_novels\n}\n\nfragment novelCardList_novels on Query {\n  novelCardList: novels(first: 20, sortKey: \"lastModified\") {\n    edges {\n      node {\n        id\n        slug\n        ...novelCard_novel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelCard_novel on Novel {\n  slug\n  title\n  description\n  coverImage\n  type\n  likes\n  views\n  lastModified\n}\n\nfragment novelThumbnailCarousel_novels on Query {\n  novelThumbnailCarousel: novels(first: $novelThumbnailCarouselCount, sortKey: $novelThumbnailCarouselSort) {\n    edges {\n      node {\n        id\n        slug\n        ...novelThumbnail_novel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelThumbnail_novel on Novel {\n  slug\n  title\n  genres\n  coverImage\n  type\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '3bb3440dd110b572a0492bfd78b7d269';
export default node;
