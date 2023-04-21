import axios from "@/app/services";

export const getAllSpots = async (): Promise<any> => {
  const { data } = await axios.get("/spots");
  return data;
};
