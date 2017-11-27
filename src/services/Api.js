const API = {
  URL: 'https://api.unsplash.com/',
  CLI_ID: '6bb5bb78cfde81736048d37f2d3399d5024a6a5be277ad88a4b1a366a5e4f77f'
}

export const fetchImages = async page => {
  const response = await fetch(
    `${API.URL}photos?client_id=${API.CLI_ID}&page=${page}`    
  )
  return response.json()  
}