export function fetchGroups() {
    return fetch('reports/groups')
        .then(res => res.json())
        .then(res => { return res as string[] })
}