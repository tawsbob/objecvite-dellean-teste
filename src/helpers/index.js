
function RestCall({ url, params = {} }){
    const fetchParams = { headers: { 'Accept' : 'application/json' }, ...params }
    return fetch(url, fetchParams).then(response => response.json())
}

export const getThumbPath = (h)=>(h.thumbnail.path +'.'+ h.thumbnail.extension)

export class RestClient {
    
    constructor({ url, apiKey }){
        this.url = url
        this.apiKey = apiKey
    }

    buildUrlParams(obj = {}, url){
        return Object.keys(obj).reduce((acc, k)=>{
            if(obj[k]){
                acc = `${acc}${ k }=${encodeURI(obj[k])}&`
            }
            return acc
        }, url + '?')
    }

    buildUrl(path){
        const { url, apiKey } = this
        return `${url}${path}apikey=${apiKey}`
    }

    call(path = '', params = {}){
        return RestCall({ url: this.buildUrl(path), params })
    }

    getChars(urlParams = {}, params){
        const urlToCall = this.buildUrlParams(urlParams, '/v1/public/characters')
        return this.call(urlToCall, params)
    }

    getChat(id, urlParams = {}){
        const urlToCall = this.buildUrlParams(urlParams, `/v1/public/characters/${id}`)
        return this.call(urlToCall)
    }
}