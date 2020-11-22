const API_KEY = '...'

export async function searchVideos (term) {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${term}&key=${API_KEY}&maxResults=5&part=snippet`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })

  const { items } = await response.json()
  return items
}
