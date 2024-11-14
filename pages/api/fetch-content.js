import axios from 'axios';

export default async function handler(req, res) {
  try {
    const url = 'https://www.fox13memphis.com/news/homeowner-grieving-after-dogs-allegedly-killed-by-mcnairy-co-deputy/article_420b5da8-a11a-11ef-a60d-3bdb114b91d5.html';

    // Set headers to mimic a real browser request
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    // Return HTML response
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(response.data);
  } catch (error) {
    console.error('Error fetching external content:', error);
    res.status(500).json({ error: 'Failed to fetch content' });
  }
}
