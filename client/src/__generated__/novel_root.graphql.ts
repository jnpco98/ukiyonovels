/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type novel_root = {
    readonly novel: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string | null;
                readonly title: string | null;
                readonly description: string | null;
                readonly type: string | null;
                readonly genres: string | null;
                readonly tags: string | null;
                readonly origins: string | null;
                readonly authors: string | null;
                readonly artists: string | null;
                readonly year: number | null;
                readonly status: string | null;
                readonly alternativeNames: string | null;
                readonly relatedNovels: string | null;
                readonly recommendedNovels: string | null;
                readonly coverImage: string | null;
            };
        }>;
        readonly " $fragmentRefs": FragmentRefs<"novelThumbnailCarousel_novels">;
    } | null;
    readonly " $refType": "novel_root";
};
export type novel_root$data = novel_root;
export type novel_root$key = {
    readonly " $data"?: novel_root$data;
    readonly " $fragmentRefs": FragmentRefs<"novel_root">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "novel_root",
    "type": "Query",
    "metadata": {
        "connection": [
            {
                "count": null,
                "cursor": null,
                "direction": "forward",
                "path": [
                    "novel"
                ]
            }
        ]
    },
    "argumentDefinitions": [
        {
            "kind": "RootArgument",
            "name": "novelBySlug",
            "type": "NovelWhere"
        }
    ],
    "selections": [
        {
            "kind": "LinkedField",
            "alias": "novel",
            "name": "__novel_novel_connection",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "where",
                    "variableName": "novelBySlug"
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
                                    "name": "type",
                                    "args": null,
                                    "storageKey": null
                                },
                                {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "genres",
                                    "args": null,
                                    "storageKey": null
                                },
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
                },
                {
                    "kind": "FragmentSpread",
                    "name": "novelThumbnailCarousel_novels",
                    "args": null
                }
            ]
        }
    ]
} as any);
(node as any).hash = '283cc1b7f5fe8bf51e8093d08eb6922e';
export default node;
