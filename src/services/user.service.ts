import axios, { AxiosInstance } from "axios";

export class UserService {
    api_url: string = "https://jsonplaceholder.typicode.com/";
    client: AxiosInstance | null;
    
    constructor() {
        let config = {
            baseURL: `${this.api_url}`,
            timeout: 300000,
        }
        this.init(config);
    }

    init(config) {
        this.client = axios.create(config);
    }

    async getUsers() {
        const response = await this.client.get('users');
        return response.data;
    }
}