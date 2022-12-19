import {DisplayResult} from "./types";

export function fetchResults(groups: string[]) {
    return fetch('reports?groups=' + groups.join(","))
        .then(res => res.json())
        .then(res => { return res as DisplayResult })
}