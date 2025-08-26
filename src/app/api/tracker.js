export async function handler(req, res) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.headers["x-real-ip"] ||
    req.socket.remoteAddress;

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

  console.log("Supabase response status:", response.status);
  const responseBody = await response.text();
  console.log("Supabase response body:", responseBody);

  res.status(200).json({ message: "IP stored", ip });
}
