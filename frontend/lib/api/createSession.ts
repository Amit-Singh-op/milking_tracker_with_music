export const createSession = async (endpoint: string, sessionData: object) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sessionData),
    });

    if (!response.ok)
      throw new Error(`Failed to create user: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};
