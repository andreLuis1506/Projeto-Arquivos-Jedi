import api from "../api";
import type People from "@/types/People";

abstract class PeopleApi {
    static async detail(id: number) :Promise<People> {
        const response = await api.get(`/people/${id}`);
        return response.data;
    }

    static async list() :Promise<People[]> {
        const response = await api.get(`/people`);
        return response.data;
    }

    static async search(name: string) :Promise<People[]> {
        const response = await api.get(`/people?search=${name}`);
        return response.data;
    }

}

export default PeopleApi;