/* tslint:disable */
/* eslint-disable */
/* @relayHash 760ae03f52d647ff87e16fd56b9c6f1c */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type homeQueryVariables = {
    featuredCarouselSort?: string | null;
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
  $featuredCarouselSort: String
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
  novels(first: 20, sortKey: $featuredCarouselSort) {
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
            "name": "featuredCarouselSort",
            "type": "String",
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
    } as any), v6 = ({
        "kind": "Literal",
        "name": "first",
        "value": 20
    } as any), v7 = [
        (v6 /*: any*/),
        ({
            "kind": "Variable",
            "name": "sortKey",
            "variableName": "featuredCarouselSort"
        } as any)
    ], v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "coverImage",
        "args": null,
        "storageKey": null
    } as any), v11 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
    } as any), v12 = [
        "sortKey"
    ], v13 = [
        (v6 /*: any*/),
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
                    "args": (v7 /*: any*/),
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
                                        (v8 /*: any*/),
                                        (v2 /*: any*/),
                                        (v9 /*: any*/),
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "genres",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        (v10 /*: any*/),
                                        (v11 /*: any*/),
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
                    "args": (v7 /*: any*/),
                    "handle": "connection",
                    "key": "novelThumbnailCarousel_novels",
                    "filters": (v12 /*: any*/)
                },
                {
                    "kind": "LinkedField",
                    "alias": "latestReleases",
                    "name": "novels",
                    "storageKey": "novels(first:20,sortKey:\"lastModified\")",
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
                                        (v8 /*: any*/),
                                        (v2 /*: any*/),
                                        (v9 /*: any*/),
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "description",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        (v10 /*: any*/),
                                        (v11 /*: any*/),
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
                    "args": (v13 /*: any*/),
                    "handle": "connection",
                    "key": "home_latestReleases",
                    "filters": (v12 /*: any*/)
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "homeQuery",
            "id": null,
            "text": "query homeQuery(\n  $featuredCarouselSort: String\n) {\n  ...novelThumbnailCarousel_novels\n  latestReleases: novels(first: 20, sortKey: \"lastModified\") {\n    ...novelCardList_novels\n    edges {\n      node {\n        slug\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelCardList_novels on NovelConnection {\n  edges {\n    node {\n      id\n      ...novelCard_novel\n    }\n  }\n}\n\nfragment novelCard_novel on Novel {\n  slug\n  title\n  description\n  coverImage\n  type\n  likes\n  views\n  lastModified\n}\n\nfragment novelThumbnailCarousel_novels on Query {\n  novels(first: 20, sortKey: $featuredCarouselSort) {\n    edges {\n      node {\n        id\n        slug\n        ...novelThumbnail_novel\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelThumbnail_novel on Novel {\n  slug\n  title\n  genres\n  coverImage\n  type\n}\n",
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
(node as any).hash = '3b579e23a6ad3ba7d9d7c883e2368e97';
export default node;
