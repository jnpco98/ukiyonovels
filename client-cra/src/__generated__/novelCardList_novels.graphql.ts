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
    "metadata": {
        "connection": [
            {
                "count": "novelsCount",
                "cursor": "novelAfter",
                "direction": "forward",
                "path": [
                    "novelCardList"
                ]
            }
        ]
    },
    "argumentDefinitions": [
        {
            "kind": "LocalArgument",
            "name": "after",
            "type": "String",
            "defaultValue": null
        },
        {
            "kind": "LocalArgument",
            "name": "sortKey",
            "type": "String",
            "defaultValue": null
        },
        {
            "kind": "LocalArgument",
            "name": "first",
            "type": "Float",
            "defaultValue": null
        },
        {
            "kind": "LocalArgument",
            "name": "where",
            "type": "NovelWhere",
            "defaultValue": null
        },
        {
            "kind": "LocalArgument",
            "name": "reverse",
            "type": "Boolean",
            "defaultValue": null
        },
        {
            "kind": "RootArgument",
            "name": "novelsCount",
            "type": "Float"
        },
        {
            "kind": "RootArgument",
            "name": "novelAfter",
            "type": "String"
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
            "name": "__novels_novelCardList_connection",
            "storageKey": null,
            "args": [
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
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "__typename",
                                    "args": null,
                                    "storageKey": null
                                },
                                {
                                    "kind": "FragmentSpread",
                                    "name": "novelCard_novel",
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
(node as any).hash = '6a11e2375097a678fb902e877cbc888c';
export default node;
