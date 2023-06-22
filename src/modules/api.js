const Url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XeHCLG7k9SvPi0wjIRpS/scores/';

const createScore = async (user, score) => {
  const response = await fetch(Url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  return response;
};

const getScore = async () => {
  const res = await fetch(Url);
  const jsonRes = await res.json();
  return jsonRes;
};

export { createScore, getScore };