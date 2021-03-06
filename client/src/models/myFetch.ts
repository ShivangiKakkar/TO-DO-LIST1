
const API_URL = 'http://localhost:3001/api/';

export function api(url: string, body?: any, method?: string, headers?: HeadersInit) {
    let options: RequestInit = { headers };
    console.log("INSIDE MY-FETCH - "+ url)
    if (body) {
        options = {
                method: method ?? 'POST',
                cache: 'no-cache',
                headers: {
                  'Content-Type': 'application/json',
                  ...headers
                },
                body: JSON.stringify(body)
};
    }
    return fetch(API_URL + url, options).then(res => res.json());
}