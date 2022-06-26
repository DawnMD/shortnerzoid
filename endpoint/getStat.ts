import axios from 'axios';

export const getStat = async (url: string) => {
  const response = await axios.get<{ total: number }>(url);
  return response.data;
};
