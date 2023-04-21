import axios from "@/app/services";
import { ResponseData } from "../protocols";

export const getAllSpots = async (): Promise<any> => {
  const { data } = await axios.get("/spots");
  return data;
};
