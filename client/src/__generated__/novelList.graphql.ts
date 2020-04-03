/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type novelList = {
    readonly novels: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly slug: string | null;
                readonly title: string | null;
            };
        }>;
    } | null;
    readonly " $refType": "novelList";
};
export type novelList$data = novelList;
export type novelList$key = {
    readonly " $data"?: novelList$data;
    readonly " $fragmentRefs": FragmentRefs<"novelList">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "novelList",
    "type": "Query",
    "metadata": {
        "connection": [
            {
                "count": "novelsCount",
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
            "alias": "novels",
            "name": "__novel_novels_connection",
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
                                    "name": "title",
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
                }
            ]
        }
    ]
} as any);
(node as any).hash = '30ce5d3911b5f871c1e91fcfe06764cb';
export default node;
