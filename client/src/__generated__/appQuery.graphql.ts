/* tslint:disable */
/* eslint-disable */
/* @relayHash ff23d46249d553e795abe0a542d7c338 */

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
export type appQueryVariables = {
    novelBySlug?: NovelWhere | null;
};
export type appQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"home_root" | "novel_root">;
};
export type appQuery = {
    readonly response: appQueryResponse;
    readonly variables: appQueryVariables;
};



/*
query appQuery(
  $novelBySlug: NovelWhere
) {
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
  novel: novels(first: 1, where: $novelBySlug) {
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
            "kind": "LocalArgument",
            "name": "novelBySlug",
            "type": "NovelWhere",
            "defaultValue": null
        } as any)
    ], v1 = [
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
        "name": "genres",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "coverImage",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
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
    } as any), v11 = [
        "sortKey"
    ], v12 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
    } as any), v13 = [
        ({
            "kind": "Literal",
            "name": "first",
            "value": 1
        } as any),
        ({
            "kind": "Variable",
            "name": "where",
            "variableName": "novelBySlug"
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "appQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
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
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "featured",
                    "name": "novels",
                    "storageKey": "novels(first:20,sortKey:\"lastModified\")",
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
                                        (v5 /*: any*/),
                                        (v6 /*: any*/),
                                        (v7 /*: any*/),
                                        (v8 /*: any*/)
                                    ]
                                },
                                (v9 /*: any*/)
                            ]
                        },
                        (v10 /*: any*/)
                    ]
                },
                {
                    "kind": "LinkedHandle",
                    "alias": "featured",
                    "name": "novels",
                    "args": (v1 /*: any*/),
                    "handle": "connection",
                    "key": "home_featured",
                    "filters": (v11 /*: any*/)
                },
                {
                    "kind": "LinkedField",
                    "alias": "latestReleases",
                    "name": "novels",
                    "storageKey": "novels(first:20,sortKey:\"lastModified\")",
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
                                        (v12 /*: any*/),
                                        (v6 /*: any*/),
                                        (v7 /*: any*/),
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
                                        (v8 /*: any*/)
                                    ]
                                },
                                (v9 /*: any*/)
                            ]
                        },
                        (v10 /*: any*/)
                    ]
                },
                {
                    "kind": "LinkedHandle",
                    "alias": "latestReleases",
                    "name": "novels",
                    "args": (v1 /*: any*/),
                    "handle": "connection",
                    "key": "home_latestReleases",
                    "filters": (v11 /*: any*/)
                },
                {
                    "kind": "LinkedField",
                    "alias": "novel",
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
                                        (v5 /*: any*/),
                                        (v6 /*: any*/),
                                        (v7 /*: any*/),
                                        (v12 /*: any*/),
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
                                        (v8 /*: any*/)
                                    ]
                                },
                                (v9 /*: any*/)
                            ]
                        },
                        (v10 /*: any*/)
                    ]
                },
                {
                    "kind": "LinkedHandle",
                    "alias": "novel",
                    "name": "novels",
                    "args": (v13 /*: any*/),
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
            "text": "query appQuery(\n  $novelBySlug: NovelWhere\n) {\n  ...home_root\n  ...novel_root\n}\n\nfragment home_root on Query {\n  featured: novels(first: 20, sortKey: \"lastModified\") {\n    ...novelThumbnailCarousel_novels\n    edges {\n      node {\n        slug\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  latestReleases: novels(first: 20, sortKey: \"lastModified\") {\n    ...novelCardList_novels\n    edges {\n      node {\n        slug\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment novelCardList_novels on NovelConnection {\n  edges {\n    node {\n      id\n      ...novelCard_novel\n    }\n  }\n}\n\nfragment novelCard_novel on Novel {\n  slug\n  title\n  description\n  coverImage\n  type\n  likes\n  views\n  lastModified\n}\n\nfragment novelThumbnailCarousel_novels on NovelConnection {\n  edges {\n    node {\n      id\n      ...novelThumbnail_novel\n    }\n  }\n}\n\nfragment novelThumbnail_novel on Novel {\n  slug\n  title\n  genres\n  coverImage\n  type\n}\n\nfragment novel_root on Query {\n  novel: novels(first: 1, where: $novelBySlug) {\n    ...novelThumbnailCarousel_novels\n    edges {\n      node {\n        slug\n        title\n        description\n        type\n        genres\n        tags\n        origins\n        authors\n        artists\n        year\n        status\n        alternativeNames\n        relatedNovels\n        recommendedNovels\n        coverImage\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'f2fc173a3969825935bf02ec0d16873d';
export default node;
