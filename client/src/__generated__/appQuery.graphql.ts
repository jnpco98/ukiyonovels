/* tslint:disable */
/* eslint-disable */
/* @relayHash 6d66c2ac40804bb6f4ab7cfab853e7a9 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type appQueryVariables = {};
export type appQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"home_root" | "novel_root">;
};
export type appQuery = {
    readonly response: appQueryResponse;
    readonly variables: appQueryVariables;
};



/*
query appQuery {
  ...home_root
  ...novel_root
}

fragment home_root on Query {
  featured: novels(first: 20, sortKey: "lastModified") {
    ...novelThumbnailCarousel_novels
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

fragment novelThumbnailCarousel_novels on NovelConnection {
  edges {
    node {
      id
      ...novelThumbnail_novel
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

fragment novel_root on Query {
  novel: novels(first: 1, where: {AND: {slug: {is: "um-sorry-ive-been-reincarnated"}}}) {
    ...novelThumbnailCarousel_novels
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
            "kind": "Literal",
            "name": "first",
            "value": 20
        } as any),
        ({
            "kind": "Literal",
            "name": "sortKey",
            "value": "lastModified"
        } as any)
    ], v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
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
        "name": "genres",
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
    ], v11 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
    } as any), v12 = [
        ({
            "kind": "Literal",
            "name": "first",
            "value": 1
        } as any),
        ({
            "kind": "Literal",
            "name": "where",
            "value": {
                "AND": {
                    "slug": {
                        "is": "um-sorry-ive-been-reincarnated"
                    }
                }
            }
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "appQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": [],
            "selections": [
                {
                    "kind": "FragmentSpread",
                    "name": "home_root",
                    "args": null
                },
                {
                    "kind": "FragmentSpread",
                    "name": "novel_root",
                    "args": null
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "appQuery",
            "argumentDefinitions": [],
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "featured",
                    "name": "novels",
                    "storageKey": "novels(first:20,sortKey:\"lastModified\")",
                    "args": (v0 /*: any*/),
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
                                        (v1 /*: any*/),
                                        (v2 /*: any*/),
                                        (v3 /*: any*/),
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
                {
                    "kind": "LinkedHandle",
                    "alias": "featured",
                    "name": "novels",
                    "args": (v0 /*: any*/),
                    "handle": "connection",
                    "key": "home_featured",
                    "filters": (v10 /*: any*/)
                },
                {
                    "kind": "LinkedField",
                    "alias": "latestReleases",
                    "name": "novels",
                    "storageKey": "novels(first:20,sortKey:\"lastModified\")",
                    "args": (v0 /*: any*/),
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
                                        (v1 /*: any*/),
                                        (v2 /*: any*/),
                                        (v3 /*: any*/),
                                        (v11 /*: any*/),
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
                    "alias": "latestReleases",
                    "name": "novels",
                    "args": (v0 /*: any*/),
                    "handle": "connection",
                    "key": "home_latestReleases",
                    "filters": (v10 /*: any*/)
                },
                {
                    "kind": "LinkedField",
                    "alias": "novel",
                    "name": "novels",
                    "storageKey": "novels(first:1,where:{\"AND\":{\"slug\":{\"is\":\"um-sorry-ive-been-reincarnated\"}}})",
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
                                        (v1 /*: any*/),
                                        (v2 /*: any*/),
                                        (v3 /*: any*/),
                                        (v4 /*: any*/),
                                        (v5 /*: any*/),
                                        (v6 /*: any*/),
                                        (v11 /*: any*/),
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "tags",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "origins",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "authors",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "artists",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "year",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "status",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "alternativeNames",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "relatedNovels",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "recommendedNovels",
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
                    "alias": "novel",
                    "name": "novels",
                    "args": (v12 /*: any*/),
                    "handle": "connection",
                    "key": "novel_novel",
                    "filters": [
                        "where"
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "appQuery",
            "id": null,
            "text": "query appQuery {\n  ...home_root\n  ...novel_root\n}\n\nfragment home_root on Query {\n  featured: novels(first: 20, sortKey: \"lastModified\") {\n    ...novelThumbnailCarousel_novels\n    edges {\n      node {\n        slug\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  latestReleases: novels(first: 20, sortKey: \"lastModified\") {\n    ...novelCardList_novels\n    edges {\n      node {\n        slug\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelCardList_novels on NovelConnection {\n  edges {\n    node {\n      id\n      ...novelCard_novel\n    }\n  }\n}\n\nfragment novelCard_novel on Novel {\n  slug\n  title\n  description\n  coverImage\n  type\n  likes\n  views\n  lastModified\n}\n\nfragment novelThumbnailCarousel_novels on NovelConnection {\n  edges {\n    node {\n      id\n      ...novelThumbnail_novel\n    }\n  }\n}\n\nfragment novelThumbnail_novel on Novel {\n  slug\n  title\n  genres\n  coverImage\n  type\n}\n\nfragment novel_root on Query {\n  novel: novels(first: 1, where: {AND: {slug: {is: \"um-sorry-ive-been-reincarnated\"}}}) {\n    ...novelThumbnailCarousel_novels\n    edges {\n      node {\n        slug\n        title\n        description\n        type\n        genres\n        tags\n        origins\n        authors\n        artists\n        year\n        status\n        alternativeNames\n        relatedNovels\n        recommendedNovels\n        coverImage\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'cef69e8c990d86d4e409fb8c4900ba30';
export default node;
