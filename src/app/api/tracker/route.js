export async function POST(request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    undefined;

  console.log("VisitorTracker API called. IP:", ip);

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const response = await fetch(`${supabaseUrl}/rest/v1/ip_logs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
    body: JSON.stringify({ ip_address: ip }),
  });

  console.log("Website response status:", response.status);
  const responseBody = await response.text();
  console.log("Website response body:", responseBody);

  return new Response(JSON.stringify({ message: "IP stored", ip }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
