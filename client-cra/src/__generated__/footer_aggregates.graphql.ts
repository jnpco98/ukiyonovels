/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type footer_aggregates = {
    readonly genres: ReadonlyArray<{
        readonly field: string | null;
        readonly count: number;
    }> | null;
    readonly status: ReadonlyArray<{
        readonly field: string | null;
        readonly count: number;
    }> | null;
    readonly types: ReadonlyArray<{
        readonly field: string | null;
        readonly count: number;
    }> | null;
    readonly tags: ReadonlyArray<{
        readonly field: string | null;
        readonly count: number;
    }> | null;
    readonly " $refType": "footer_aggregates";
};
export type footer_aggregates$data = footer_aggregates;
export type footer_aggregates$key = {
    readonly " $data"?: footer_aggregates$data;
    readonly " $fragmentRefs": FragmentRefs<"footer_aggregates">;
};



const node: ReaderFragment = (function () {
    var v0 = [
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "field",
            "args": null,
            "storageKey": null
        } as any),
        ({
            "kind": "ScalarField",
            "alias": null,
            "name": "count",
            "args": null,
            "storageKey": null
        } as any)
    ];
    return {
        "kind": "Fragment",
        "name": "footer_aggregates",
        "type": "Query",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": "genres",
                "name": "novelAggregateGenres",
                "storageKey": null,
                "args": null,
                "concreteType": "NovelAggregate",
                "plural": true,
                "selections": (v0 /*: any*/)
            },
            {
                "kind": "LinkedField",
                "alias": "status",
                "name": "novelAggregateStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "NovelAggregate",
                "plural": true,
                "selections": (v0 /*: any*/)
            },
            {
                "kind": "LinkedField",
                "alias": "types",
                "name": "novelAggregateTypes",
                "storageKey": null,
                "args": null,
                "concreteType": "NovelAggregate",
                "plural": true,
                "selections": (v0 /*: any*/)
            },
            {
                "kind": "LinkedField",
                "alias": "tags",
                "name": "novelAggregateTags",
                "storageKey": null,
                "args": null,
                "concreteType": "NovelAggregate",
                "plural": true,
                "selections": (v0 /*: any*/)
            }
        ]
    } as any;
})();
(node as any).hash = '13ac98e26301002af1cfa85626e62edc';
export default node;
