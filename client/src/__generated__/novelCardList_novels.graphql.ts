/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type novelCardList_novels = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"novelCard_novel">;
        };
    }>;
    readonly " $refType": "novelCardList_novels";
};
export type novelCardList_novels$data = novelCardList_novels;
export type novelCardList_novels$key = {
    readonly " $data"?: novelCardList_novels$data;
    readonly " $fragmentRefs": FragmentRefs<"novelCardList_novels">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "novelCardList_novels",
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
                            "name": "novelCard_novel",
                            "args": null
                        }
                    ]
                }
            ]
        }
    ]
} as any);
(node as any).hash = '4eaf703ff1f9a7efb8c64f352a04f0ec';
export default node;
