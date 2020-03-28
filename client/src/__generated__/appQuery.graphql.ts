/* tslint:disable */
/* eslint-disable */
/* @relayHash 961fc87b36b62e459506e8d4b080c3f6 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type appQueryVariables = {};
export type appQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"home_root">;
};
export type appQuery = {
    readonly response: appQueryResponse;
    readonly variables: appQueryVariables;
};



/*
query appQuery {
  ...home_root
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
        "name": "coverImage",
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
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
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
    } as any), v9 = [
        "sortKey"
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
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "genres",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        (v4 /*: any*/),
                                        (v5 /*: any*/),
                                        (v6 /*: any*/)
                                    ]
                                },
                                (v7 /*: any*/)
                            ]
                        },
                        (v8 /*: any*/)
                    ]
                },
                {
                    "kind": "LinkedHandle",
                    "alias": "featured",
                    "name": "novels",
                    "args": (v0 /*: any*/),
                    "handle": "connection",
                    "key": "home_featured",
                    "filters": (v9 /*: any*/)
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
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "description",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        (v4 /*: any*/),
                                        (v5 /*: any*/),
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
                                        (v6 /*: any*/)
                                    ]
                                },
                                (v7 /*: any*/)
                            ]
                        },
                        (v8 /*: any*/)
                    ]
                },
                {
                    "kind": "LinkedHandle",
                    "alias": "latestReleases",
                    "name": "novels",
                    "args": (v0 /*: any*/),
                    "handle": "connection",
                    "key": "home_latestReleases",
                    "filters": (v9 /*: any*/)
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "appQuery",
            "id": null,
            "text": "query appQuery {\n  ...home_root\n}\n\nfragment home_root on Query {\n  featured: novels(first: 20, sortKey: \"lastModified\") {\n    ...novelThumbnailCarousel_novels\n    edges {\n      node {\n        slug\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  latestReleases: novels(first: 20, sortKey: \"lastModified\") {\n    ...novelCardList_novels\n    edges {\n      node {\n        slug\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelCardList_novels on NovelConnection {\n  edges {\n    node {\n      id\n      ...novelCard_novel\n    }\n  }\n}\n\nfragment novelCard_novel on Novel {\n  slug\n  title\n  description\n  coverImage\n  type\n  likes\n  views\n  lastModified\n}\n\nfragment novelThumbnailCarousel_novels on NovelConnection {\n  edges {\n    node {\n      id\n      ...novelThumbnail_novel\n    }\n  }\n}\n\nfragment novelThumbnail_novel on Novel {\n  slug\n  title\n  genres\n  coverImage\n  type\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '6f3eb9357ddbaf5d74a107a891045956';
export default node;
