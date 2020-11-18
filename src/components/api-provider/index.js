import Context from './context';
import { RestClient } from '../../helpers';

const url = process.env.REACT_APP_API_HOST
const apiKey = process.env.REACT_APP_API_KEY

const MarvelRestClient = new RestClient({ url, apiKey  })
function ApiProvider({ children }){
    return (
        <Context.Provider value={{ MarvelRestClient }}>
            { children }
        </Context.Provider>
    )
}
export default ApiProvider;