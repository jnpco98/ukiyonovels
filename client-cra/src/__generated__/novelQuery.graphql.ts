/* tslint:disable */
/* eslint-disable */
/* @relayHash 0fd9ab994df10bd2df3fdcaccc641730 */

import { ConcreteRequest } from "relay-runtime";
export type novelQueryVariables = {
    slug: string;
};
export type novelQueryResponse = {
    readonly result: {
        readonly slug: string | null;
        readonly title: string | null;
        readonly description: string | null;
        readonly type: string | null;
        readonly genres: string | null;
        readonly tags: string | null;
        readonly origins: string | null;
        readonly authors: string | null;
        readonly artists: string | null;
        readonly year: number | null;
        readonly status: string | null;
        readonly alternativeNames: string | null;
        readonly relatedNovels: string | null;
        readonly recommendedNovels: string | null;
        readonly coverImage: string | null;
    } | null;
};
export type novelQuery = {
    readonly response: novelQueryResponse;
    readonly variables: novelQueryVariables;
};



/*
query novelQuery(
  $slug: String!
) {
  result: novelBySlug(slug: $slug) {
    slug
    title
    description
    type
    genres
    tags
    origins
    authors
    artists
    year
    status
    alternativeNames
    relatedNovels
    recommendedNovels
    coverImage
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
        "name": "slug",
        "args": null,
        "storageKey": null
    } as any), v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
    } as any), v5 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
    } as any), v6 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "genres",
        "args": null,
        "storageKey": null
    } as any), v7 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "tags",
        "args": null,
        "storageKey": null
    } as any), v8 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "origins",
        "args": null,
        "storageKey": null
    } as any), v9 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "authors",
        "args": null,
        "storageKey": null
    } as any), v10 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "artists",
        "args": null,
        "storageKey": null
    } as any), v11 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "year",
        "args": null,
        "storageKey": null
    } as any), v12 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "status",
        "args": null,
        "storageKey": null
    } as any), v13 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "alternativeNames",
        "args": null,
        "storageKey": null
    } as any), v14 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "relatedNovels",
        "args": null,
        "storageKey": null
    } as any), v15 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "recommendedNovels",
        "args": null,
        "storageKey": null
    } as any), v16 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "coverImage",
        "args": null,
        "storageKey": null
    } as any);
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "novelQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "result",
                    "name": "novelBySlug",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Novel",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        (v5 /*: any*/),
                        (v6 /*: any*/),
                        (v7 /*: any*/),
                        (v8 /*: any*/),
                        (v9 /*: any*/),
                        (v10 /*: any*/),
                        (v11 /*: any*/),
                        (v12 /*: any*/),
                        (v13 /*: any*/),
                        (v14 /*: any*/),
                        (v15 /*: any*/),
                        (v16 /*: any*/)
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "novelQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": "result",
                    "name": "novelBySlug",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Novel",
                    "plural": false,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        (v5 /*: any*/),
                        (v6 /*: any*/),
                        (v7 /*: any*/),
                        (v8 /*: any*/),
                        (v9 /*: any*/),
                        (v10 /*: any*/),
                        (v11 /*: any*/),
                        (v12 /*: any*/),
                        (v13 /*: any*/),
                        (v14 /*: any*/),
                        (v15 /*: any*/),
                        (v16 /*: any*/),
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
            "name": "novelQuery",
            "id": null,
            "text": "query novelQuery(\n  $slug: String!\n) {\n  result: novelBySlug(slug: $slug) {\n    slug\n    title\n    description\n    type\n    genres\n    tags\n    origins\n    authors\n    artists\n    year\n    status\n    alternativeNames\n    relatedNovels\n    recommendedNovels\n    coverImage\n    id\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'f1847e63625fccc2c331ae9720426cfd';
export default node;
