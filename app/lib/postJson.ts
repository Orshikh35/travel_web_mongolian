export type SubmitStatus = "idle" | "sending" | "success" | "error";

// Returns the parsed body on a 2xx response, or null on any network/server failure.
export const postJson = async <T = Record<string, unknown>>(url: string, body: unknown): Promise<T | null> => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
};
