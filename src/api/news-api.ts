import axios from "axios"

const news = axios.create({
    baseURL: 'https://www.spaceflightnewsapi.net/api/'
})

export const NewsAPI = {
    findApi(count: number) {
        return news.get(`v2/blogs?_limit=${count}`)
    },
    showMoreApi(count: number, page: number) {
        return news.get(`v2/blogs?_limit=${count}&_start=${page}`)
    }
}