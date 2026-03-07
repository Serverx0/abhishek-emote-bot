// emote.ts

interface SendLagParams {
  server: string;
  team_code: string;
  cookies: string[]; // 👈 cookies passed as param
}

export async function sendLag(params: SendLagParams) {
  const { server, team_code, cookies } = params;

  // Convert cookie array to single header string
  const cookieHeader = cookies.join("; ");

  const response = await fetch("https://ffemote.com/lag", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieHeader,
      Origin: "https://ffemote.com",
      Referer: "https://ffemote.com/",
    },
    body: JSON.stringify({
      server,
      team_code
    }),
  });

  // Collect response cookies
  const jsonResponse = await response.json();
  return jsonResponse;
}
