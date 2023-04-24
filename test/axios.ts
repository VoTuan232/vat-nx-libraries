import { AxiosCommon } from '@votuan/axios';

const axios = new AxiosCommon({
    baseURL: 'https://api.github.com'
})

axios.get('/orgs/nodejs').then((data) => {
    console.log(data)
})