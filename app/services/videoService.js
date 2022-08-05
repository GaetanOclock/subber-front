import apiClient from "./apiClient";

const originalService = {
    getAll() {
        return apiClient.get('/video');
    },
    getById(videoId) {
        return apiClient.get('/video/' + videoId);
    },
    create(originalId) {
        return apiClient.post('/video', {originalId});
    },
    save(video) {
        return apiClient.put('/video/' + video.id, {...video});
    }
};

export default originalService;