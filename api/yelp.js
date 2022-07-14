import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer I7IqyyntVhFOV2TdmfnGUV0HqBtJxDjOloRpBNakAPhMJV1sZjhRfdvQDPCXfubRDFPRWsq4Cn-ggRquw-kfhOen8szO9PK8jtKeho6GoHyDJOyHVfhKb_qwDZ29YHYx' 
    }
})