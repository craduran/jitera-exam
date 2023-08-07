import axios, { AxiosInstance } from "axios";

export class UserService {
    api_url: string | null;
    client: AxiosInstance | null;
    constructor() {
        this.api_url = "https://jsonplaceholder.typicode.com/";
        this.client = null;
    }

    init = () => {
        let config = {
            baseURL: `${this.api_url}`,
            timeout: 300000,
        }
        this.client = axios.create(config);
        return this.client;
    }

    getUsers = () => {
        return this.init().get('users');
    }
}