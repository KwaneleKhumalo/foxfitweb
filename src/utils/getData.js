import axios from 'axios'

export const getData = async (url, method) => {
  const response = await axios.get(url, { withCredentials: true })

  console.log(response);
}