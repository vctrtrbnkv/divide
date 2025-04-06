export const apiFetch = (route: string, params?: RequestInit) => {
    const url = `http://localhost:3000/${route}`;
    return fetch(url, params).then((response) => response.json());
};
