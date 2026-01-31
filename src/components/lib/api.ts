export const API_BASE_URL = process.env.BACKENDURL || "http://localhost:8722";

export async function apiRequest(
  url: string,
  options: RequestInit = {}
) {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || "Something went wrong")
  }

  return response.json()
}
