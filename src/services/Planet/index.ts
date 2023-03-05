import api from "../api";
import type Planet from "@/types/Planet";

abstract class PlanetApi {
    static async get(id: number) :Promise<Planet> {
        const response = await api.get(`/planet/${id}`);
        return response.data;
    }

}

export default PlanetApi;