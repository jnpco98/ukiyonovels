/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type home_root = {
    readonly featured: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string | null;
            };
        }>;
        readonly " $fragmentRefs": FragmentRefs<"novelThumbnailCarousel_novels">;
    } | null;
    readonly latestReleases: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly slug: string | null;
            };
        }>;
        readonly " $fragmentRefs": FragmentRefs<"novelCardList_novels">;
    } | null;
    readonly " $refType": "home_root";
};
export type home_root$data = home_root;
export type home_root$key = {
    readonly " $data"?: home_root$data;
    readonly " $fragmentRefs": FragmentRefs<"home_root">;
};



const node: ReaderFragment = (function () {
    var v0 = [
        ({
            "kind": "Literal",
            "name": "sortKey",
            "value": "lastModified"
        } as any)
    ], v1 = ({
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
    } as any), v2 = ({
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
    } as any);
    return {
        "kind": "Fragment",
        "name": "home_root",
        "type": "Query",
        "metadata": {
            "connection": [
                {
                    "count": null,
                    "cursor": null,
                    "direction": "forward",
                    "path": [
                        "featured"
                    ]
                },
                {
                    "count": null,
                    "cursor": null,
                    "direction": "forward",
                    "path": [
                        "latestReleases"
                    ]
                }
            ]
        },
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": "featured",
                "name": "__home_featured_connection",
                "storageKey": "__home_featured_connection(sortKey:\"lastModified\")",
                "args": (v0 /*: any*/),
                "concreteType": "NovelConnection",
                "plural": false,
                "selections": [
                    (v1 /*: any*/),
                    (v2 /*: any*/),
                    {
                        "kind": "FragmentSpread",
                        "name": "novelThumbnailCarousel_novels",
                        "args": null
                    }
                ]
            },
            {
                "kind": "LinkedField",
                "alias": "latestReleases",
                "name": "__home_latestReleases_connection",
                "storageKey": "__home_latestReleases_connection(sortKey:\"lastModified\")",
                "args": (v0 /*: any*/),
                "concreteType": "NovelConnection",
                "plural": false,
                "selections": [
                    (v1 /*: any*/),
                    (v2 /*: any*/),
                    {
                        "kind": "FragmentSpread",
                        "name": "novelCardList_novels",
                        "args": null
                    }
                ]
            }
        ]
    } as any;
})();
(node as any).hash = 'abf1f00df37a0cef65fdedc667dbf84e';
export default node;
