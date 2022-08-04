import apiClient from "./apiClient";

const originalService = {
    getAll() {
        return apiClient.get('/original');
    }
};

export default originalService;