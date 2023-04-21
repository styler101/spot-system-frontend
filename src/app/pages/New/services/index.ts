import axios from "@/app/services";

export const createSpot = async (payload: any): Promise<any> => {
  const { data } = await axios.post("/spots", payload);
  return data;
};
