export const fetchHistory = async (endpoint: string) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
