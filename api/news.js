const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const apiKey = 'b8504bb386304c0b8cc1161f3a8cc2d8'; // Replace with your NewsAPI key
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log('here', data);

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ error: data.message });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
