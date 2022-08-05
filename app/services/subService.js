import apiClient from './apiClient';

const subService = {
    save: (sub) => {
        return apiClient.put('/sub/' + sub.id, {...sub});
    }
}

export default subService;