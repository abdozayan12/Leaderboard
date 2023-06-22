const gameId = 'XeHCLG7k9SvPi0wjIRpS';

const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const createScore = async (user, score) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  return response;
};

const getScore = async () => {
  const res = await fetch(apiUrl);
  const jsonRes = await res.json();
  return jsonRes;
};

export { createScore, getScore };