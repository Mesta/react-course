export async function searchImageByTerm (term) {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Client-ID ...'
    }),
  })

  const { results } = await response.json()
  return results
}
