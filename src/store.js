import { reactive } from 'vue';

export const store = reactive ({
    restaurantsUrl: 'http://127.0.0.1:8000/api/restaurants',
    restaurants:[],

    typesUrl: 'http://127.0.0.1:8000/api/types',
    types:[],
});