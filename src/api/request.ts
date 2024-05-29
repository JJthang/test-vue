import instanceAxios from '@/utils'

export const getProduct = () => {
  return instanceAxios('GET')
}

export const deleProduct = () => {
  return instanceAxios('DELETE')
}
