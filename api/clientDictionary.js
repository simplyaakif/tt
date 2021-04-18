import {create} from "apisauce";

const apiDictionaryClient = create({
    baseURL:'https://wordsapiv1.p.rapidapi.com/words/',
    headers: {
        'x-rapidapi-key': 'mVWvBazqi8msh7ByreBrhEiibxe8p1KkXbpjsnG0ZTwlnykwnU',
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
    },
})

export default apiDictionaryClient;