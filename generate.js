export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: 'You generate event announcements and songs.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    res.status(200).json({ result: data.choices[0].message.content });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
}
