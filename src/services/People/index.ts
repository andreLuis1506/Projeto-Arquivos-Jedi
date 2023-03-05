import api from "../api";
import type People from "@/types/People";

abstract class PeopleApi {
    static async get(id: number) :Promise<People> {
        const response = await api.get(`/people/${id}`);
        return response.data;
    }

}

export default PeopleApi;