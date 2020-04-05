/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type novelCardList_novels = {
    readonly novelCardList: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly slug: string | null;
                readonly " $fragmentRefs": FragmentRefs<"novelCard_novel">;
            };
        }>;
    } | null;
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
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [
        {
            "kind": "RootArgument",
            "name": "novelsCount",
            "type": "Float"
        },
        {
            "kind": "RootArgument",
            "name": "novelsSort",
            "type": "String"
        },
        {
            "kind": "RootArgument",
            "name": "novelWhere",
            "type": "NovelWhere"
        },
        {
            "kind": "RootArgument",
            "name": "novelReverse",
            "type": "Boolean"
        }
    ],
    "selections": [
        {
            "kind": "LinkedField",
            "alias": "novelCardList",
            "name": "novels",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "novelsCount"
                },
                {
                    "kind": "Variable",
                    "name": "reverse",
                    "variableName": "novelReverse"
                },
                {
                    "kind": "Variable",
                    "name": "sortKey",
                    "variableName": "novelsSort"
                },
                {
                    "kind": "Variable",
                    "name": "where",
                    "variableName": "novelWhere"
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
                                    "kind": "FragmentSpread",
                                    "name": "novelCard_novel",
                                    "args": null
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'b00954bde056bf42a10cd2fdd0c25b25';
export default node;
