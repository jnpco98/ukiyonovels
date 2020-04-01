/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type novelThumbnailCarousel_novels = {
    readonly novels: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly slug: string | null;
                readonly " $fragmentRefs": FragmentRefs<"novelThumbnail_novel">;
            };
        }>;
    } | null;
    readonly " $refType": "novelThumbnailCarousel_novels";
};
export type novelThumbnailCarousel_novels$data = novelThumbnailCarousel_novels;
export type novelThumbnailCarousel_novels$key = {
    readonly " $data"?: novelThumbnailCarousel_novels$data;
    readonly " $fragmentRefs": FragmentRefs<"novelThumbnailCarousel_novels">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "novelThumbnailCarousel_novels",
    "type": "Query",
    "metadata": {
        "connection": [
            {
                "count": "novelThumbnailCarouselCount",
                "cursor": null,
                "direction": "forward",
                "path": [
                    "novels"
                ]
            }
        ]
    },
    "argumentDefinitions": [
        {
            "kind": "RootArgument",
            "name": "novelThumbnailCarouselCount",
            "type": "Float"
        },
        {
            "kind": "RootArgument",
            "name": "novelThumbnailCarouselSort",
            "type": "String"
        }
    ],
    "selections": [
        {
            "kind": "LinkedField",
            "alias": "novels",
            "name": "__novelThumbnailCarousel_novels_connection",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "sortKey",
                    "variableName": "novelThumbnailCarouselSort"
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
                                    "name": "__typename",
                                    "args": null,
                                    "storageKey": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "novelThumbnail_novel",
                                    "args": null
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
        }
    ]
} as any);
(node as any).hash = '4f22729edd350b2d5090420aba33cda0';
export default node;
