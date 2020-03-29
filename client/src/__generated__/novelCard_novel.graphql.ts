/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type novelCard_novel = {
    readonly slug: string | null;
    readonly title: string | null;
    readonly description: string | null;
    readonly coverImage: string | null;
    readonly type: string | null;
    readonly likes: number | null;
    readonly views: number | null;
    readonly lastModified: unknown;
    readonly " $refType": "novelCard_novel";
};
export type novelCard_novel$data = novelCard_novel;
export type novelCard_novel$key = {
    readonly " $data"?: novelCard_novel$data;
    readonly " $fragmentRefs": FragmentRefs<"novelCard_novel">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "novelCard_novel",
    "type": "Novel",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
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
            "name": "description",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "coverImage",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "likes",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "views",
            "args": null,
            "storageKey": null
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastModified",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '4f358a691ea7bb1a8ad8c6f39cc66c8c';
export default node;
