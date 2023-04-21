import { useCallback, useState } from "react";
import { getAllSpots } from "../services";
import { DomainData } from "../protocols";
import mapper from "../mapper";
import { toast } from "react-toastify";

export function listSpotsUseCase() {
  const [data, setData] = useState<DomainData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getAllSpots();
      setData(mapper.parserToDomain(response));
    } catch (error) {
      toast.error("Não foi possível carregar os spots");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    setData,
    loading,
    setLoading,
    loadData,
  };
}
