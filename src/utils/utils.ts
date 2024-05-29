import type { productIF } from '@/modals/products'

const instanceAxios = async (mothodAPI: string, data?: productIF, id?: string) => {
  let initalUrl = `http://localhost:3000/product`
  initalUrl += id ? `/${id}` : ''
  const response = await fetch(initalUrl, {
    method: mothodAPI,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const result = await response.json()
  return result
}

export { instanceAxios }
