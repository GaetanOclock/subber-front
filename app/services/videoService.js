import apiClient from "./apiClient";

const originalService = {
    getById(videoId) {
        return apiClient.get('/video/' + videoId);
    },
    create(originalId) {
        return apiClient.post('/video', {originalId});
    }
};

export default originalService;