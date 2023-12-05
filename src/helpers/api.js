async function api() {
  const response = await fetch("https://insult.mattbas.org/api/json");
  const movies = await response.json();
  console.log(movies);
}

export default api