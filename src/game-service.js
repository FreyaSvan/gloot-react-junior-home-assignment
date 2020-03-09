/**
 * This file handles all the communication with the server.
 * The different endpoints are described in server.js.
 */
const apiUrl = 'http://localhost:3000';

const JSON_HEADERS = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
};

export async function addGame(name) {
  const resp = await fetch(`${apiUrl}/game`, {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({name})
  });
  return await resp.json();
};

export async function editGame(gameId, name) {
  const resp = await fetch(`${apiUrl}/game/${gameId}`, {
    method: 'PUT',
    headers: JSON_HEADERS,
    body: JSON.stringify({name})
   });
  return await resp.json();
};

export async function getGames() {
  const resp = await fetch(`${apiUrl}/game`);
  return await resp.json();
};

export async function deleteGame(gameId) {
  const resp = await fetch(`${apiUrl}/game/${gameId}`, { method: 'DELETE' });
  return await resp.json();
};