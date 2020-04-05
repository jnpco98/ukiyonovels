/* tslint:disable */
/* eslint-disable */
/* @relayHash 2443f058d7b15f45a67b6ceb1d35d6f1 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type appQueryVariables = {};
export type appQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"sidePanel_aggregates" | "footer_aggregates">;
};
export type appQuery = {
    readonly response: appQueryResponse;
    readonly variables: appQueryVariables;
};



/*
query appQuery {
  ...sidePanel_aggregates
  ...footer_aggregates
}

fragment footer_aggregates on Query {
  genres: novelAggregateGenres {
    field
    count
  }
  status: novelAggregateStatus {
    field
    count
  }
  types: novelAggregateTypes {
    field
    count
  }
  tags: novelAggregateTags {
    field
    count
  }
}

fragment sidePanel_aggregates on Query {
  genres: novelAggregateGenres {
    field
    count
  }
  status: novelAggregateStatus {
    field
    count
  }
  types: novelAggregateTypes {
    field
    count
  }
  tags: novelAggregateTags {
    field
    count
  }
}
*/

const node: ConcreteRequest = (function () {
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
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "appQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": [],
            "selections": [
                {
                    "kind": "FragmentSpread",
                    "name": "sidePanel_aggregates",
                    "args": null
                },
                {
                    "kind": "FragmentSpread",
                    "name": "footer_aggregates",
                    "args": null
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "appQuery",
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
        },
        "params": {
            "operationKind": "query",
            "name": "appQuery",
            "id": null,
            "text": "query appQuery {\n  ...sidePanel_aggregates\n  ...footer_aggregates\n}\n\nfragment footer_aggregates on Query {\n  genres: novelAggregateGenres {\n    field\n    count\n  }\n  status: novelAggregateStatus {\n    field\n    count\n  }\n  types: novelAggregateTypes {\n    field\n    count\n  }\n  tags: novelAggregateTags {\n    field\n    count\n  }\n}\n\nfragment sidePanel_aggregates on Query {\n  genres: novelAggregateGenres {\n    field\n    count\n  }\n  status: novelAggregateStatus {\n    field\n    count\n  }\n  types: novelAggregateTypes {\n    field\n    count\n  }\n  tags: novelAggregateTags {\n    field\n    count\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '5cc397ec28a4aec90b44a8936ed2d43c';
export default node;
