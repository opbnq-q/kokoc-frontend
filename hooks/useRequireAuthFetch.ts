import type { HTTPResponse } from "~/models/HTTPResponse";

export async function useRequireAuthFetch<T>(url: string, options?: RequestInit, baseURL?: string): Promise<undefined | HTTPResponse<T>> {
    let token = localStorage.getItem('token')
    const base = baseURL ?? 'https://foot.gogacoder.com/api/'
    if (!token) {
        navigateTo("/auth")
        return
    }
    let body, response;
    try {
        const fetchOptions: RequestInit = {
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            },
            ...options,
        };

        if (options?.method && options.method !== "GET" && options.method !== "HEAD") {
            fetchOptions.body = JSON.stringify(options?.body || {});
        }

        response = await fetch(`${base}${url}`, fetchOptions);
        body = await response.json();
    } catch(e) {
        console.error(e)
        if (response?.status == 401) {
            localStorage.removeItem('token')
            navigateTo('/auth')
        }
        return
    }
    return body
}