import {DisplayResult} from "./types";

export function fetchResults() {
    return fetch('reports/groups')
            .then(res => res.json())
            .then(res => {
                return fetch('reports?groups=' + res.join(","))
                    .then(res => res.json())
                    .then(res => { return res as DisplayResult })
                })
}