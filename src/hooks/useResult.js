import { useEffect, useState } from 'react';
import yelp from '../../api/yelp';

export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi = async termResearch =>{
        try{
            const res = await yelp.get('/search',{
                params:{
                    limit: 50,
                    term: termResearch,
                    location: 'san jose'
                }
            })
            setResult(res.data.businesses)
        }catch(e){
            setErrorMessage(e.message)
        }
    }
    
    useEffect(() => {
        searchApi('lo')
    }, []);
    return [searchApi, result, errorMessage]
}
