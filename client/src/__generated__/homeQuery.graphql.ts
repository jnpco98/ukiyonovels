/* tslint:disable */
/* eslint-disable */
/* @relayHash d2fc3890763847152a166b7c045b4077 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type homeQueryVariables = {
    novelThumbnailCarouselSort?: string | null;
    novelThumbnailCarouselCount?: number | null;
};
export type homeQueryResponse = {
    readonly latestReleases: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string | null;
            };
        }>;
        readonly " $fragmentRefs": FragmentRefs<"novelCardList_novels">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"novelThumbnailCarousel_novels">;
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
  latestReleases: novels(first: 20, sortKey: "lastModified") {
    ...novelCardList_novels
    edges {
      node {
        slug
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

fragment novelCardList_novels on NovelConnection {
  edges {
    node {
      id
      ...novelCard_novel
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
  novels(first: $novelThumbnailCarouselCount, sortKey: $novelThumbnailCarouselSort) {
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
    ], v1 = ({
        "kind": "Literal",
        "name": "sortKey",
        "value": "lastModified"
    } as any), v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "slug",
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
            "variableName": "novelThumbnailCarouselCount"
        } as any),
        ({
            "kind": "Variable",
            "name": "sortKey",
            "variableName": "novelThumbnailCarouselSort"
        } as any)
    ], v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "coverImage",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
    } as any), v11 = [
        "sortKey"
    ], v12 = [
        ({
            "kind": "Literal",
            "name": "first",
            "value": 20
        } as any),
        (v1 /*: any*/)
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
                    "kind": "LinkedField",
                    "alias": "latestReleases",
                    "name": "__home_latestReleases_connection",
                    "storageKey": "__home_latestReleases_connection(sortKey:\"lastModified\")",
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
                                        (v3 /*: any*/)
                                    ]
                                },
                                (v4 /*: any*/)
                            ]
                        },
                        (v5 /*: any*/),
                        {
                            "kind": "FragmentSpread",
                            "name": "novelCardList_novels",
                            "args": null
                        }
                    ]
                },
                {
                    "kind": "FragmentSpread",
                    "name": "novelThumbnailCarousel_novels",
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
                    "alias": null,
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
                                        (v7 /*: any*/),
                                        (v2 /*: any*/),
                                        (v8 /*: any*/),
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "genres",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        (v9 /*: any*/),
                                        (v10 /*: any*/),
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
                    "alias": null,
                    "name": "novels",
                    "args": (v6 /*: any*/),
                    "handle": "connection",
                    "key": "novelThumbnailCarousel_novels",
                    "filters": (v11 /*: any*/)
                },
                {
                    "kind": "LinkedField",
                    "alias": "latestReleases",
                    "name": "novels",
                    "storageKey": "novels(first:20,sortKey:\"lastModified\")",
                    "args": (v12 /*: any*/),
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
                                        (v7 /*: any*/),
                                        (v2 /*: any*/),
                                        (v8 /*: any*/),
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "description",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        (v9 /*: any*/),
                                        (v10 /*: any*/),
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
                    "alias": "latestReleases",
                    "name": "novels",
                    "args": (v12 /*: any*/),
                    "handle": "connection",
                    "key": "home_latestReleases",
                    "filters": (v11 /*: any*/)
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "homeQuery",
            "id": null,
            "text": "query homeQuery(\n  $novelThumbnailCarouselSort: String\n  $novelThumbnailCarouselCount: Float\n) {\n  ...novelThumbnailCarousel_novels\n  latestReleases: novels(first: 20, sortKey: \"lastModified\") {\n    ...novelCardList_novels\n    edges {\n      node {\n        slug\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelCardList_novels on NovelConnection {\n  edges {\n    node {\n      id\n      ...novelCard_novel\n    }\n  }\n}\n\nfragment novelCard_novel on Novel {\n  slug\n  title\n  description\n  coverImage\n  type\n  likes\n  views\n  lastModified\n}\n\nfragment novelThumbnailCarousel_novels on Query {\n  novels(first: $novelThumbnailCarouselCount, sortKey: $novelThumbnailCarouselSort) {\n    edges {\n      node {\n        id\n        slug\n        ...novelThumbnail_novel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelThumbnail_novel on Novel {\n  slug\n  title\n  genres\n  coverImage\n  type\n}\n",
            "metadata": {
                "connection": [
                    {
                        "count": null,
                        "cursor": null,
                        "direction": "forward",
                        "path": [
                            "latestReleases"
                        ]
                    }
                ]
            }
        }
    } as any;
})();
(node as any).hash = 'feed65974d7919fc2602163685293868';
export default node;
