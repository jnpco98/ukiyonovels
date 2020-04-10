/* tslint:disable */
/* eslint-disable */
/* @relayHash ea4fef15b302563bd7dfca8614d08b62 */

import { ConcreteRequest } from "relay-runtime";
export type standardQueryVariables = {
    slug: string;
};
export type standardQueryResponse = {
    readonly article: {
        readonly title: string;
        readonly content: string | null;
    } | null;
};
export type standardQuery = {
    readonly response: standardQueryResponse;
    readonly variables: standardQueryVariables;
};



/*
query standardQuery(
  $slug: String!
) {
  article: articleBySlug(slug: $slug) {
    title
    content
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "slug",
            "type": "String!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "slug",
            "variableName": "slug"
        } as any)
    ], v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "standardQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "article",
                    "name": "articleBySlug",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Article",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/)
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "standardQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "article",
                    "name": "articleBySlug",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Article",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "id",
                            "args": null,
                            "storageKey": null
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "standardQuery",
            "id": null,
            "text": "query standardQuery(\n  $slug: String!\n) {\n  article: articleBySlug(slug: $slug) {\n    title\n    content\n    id\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '8b327c670020da8443bc03a2a0fa21a3';
export default node;
