import client from './clientDictionary';

const getWords = (keyword) => client.get('/'+keyword);

export default {
    getWords
};