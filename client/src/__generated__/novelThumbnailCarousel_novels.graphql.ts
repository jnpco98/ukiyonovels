/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type novelThumbnailCarousel_novels = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"novelThumbnail_novel">;
        };
    }>;
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
    "type": "NovelConnection",
    "metadata": null,
    "argumentDefinitions": [],
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
                            "kind": "FragmentSpread",
                            "name": "novelThumbnail_novel",
                            "args": null
                        }
                    ]
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'aad860ee623e5d28d0208a6894f8c7cb';
export default node;
