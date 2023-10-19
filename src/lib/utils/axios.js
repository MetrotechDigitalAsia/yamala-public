import axios from "axios";

export default axios.create({
    baseURL: 'https://cms.yamalahaus.genesisindojaya.com/api',
    headers: {
        'Content-Type': 'application/json',
    }
})