import axios from "@/app/services";

export const authentication = async (email: string): Promise<any> => {
  const { data } = await axios.post("/users", {
    email,
  });
  return data;
};
