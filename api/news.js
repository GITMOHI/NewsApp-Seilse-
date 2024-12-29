import fetch from 'node-fetch';

module.exports = async (req, res) => {
  const apiKey = 'b8504bb386304c0b8cc1161f3a8cc2d8'; // Replace with your NewsAPI key
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  try {
    console.log('Fetching news from NewsAPI...');
    const response = await fetch(apiUrl);
    console.log('NewsAPI Response Status:', response.status);

    const data = await response.json();
    console.log('NewsAPI Response Data:', data);

    if (response.ok) {
      res.status(200).json(data);
    } else {
      console.error('NewsAPI Error:', data);
      res.status(response.status).json({ error: data.message });
    }
  } catch (error) {
    console.error('Serverless Function Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
