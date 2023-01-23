const asyncHandler = require('express-async-handler');
const axios = require('axios');
const gotBaseURL = 'https://www.anapioficeandfire.com/api';

const getCharacters = asyncHandler(async (req, res) => {
  try {
    const response = await axios.get(`${gotBaseURL}/characters?pageSize=20`);
    const characters = response.data;
    res.status(200);
    res.json(characters);
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error('Characters not found');
  }
});

module.exports = { getCharacters };
