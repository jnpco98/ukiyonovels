/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type sidePanel_aggregates = {
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
    readonly " $refType": "sidePanel_aggregates";
};
export type sidePanel_aggregates$data = sidePanel_aggregates;
export type sidePanel_aggregates$key = {
    readonly " $data"?: sidePanel_aggregates$data;
    readonly " $fragmentRefs": FragmentRefs<"sidePanel_aggregates">;
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
        "name": "sidePanel_aggregates",
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
(node as any).hash = '7a1425d48815374216bb116bf641d17a';
export default node;
