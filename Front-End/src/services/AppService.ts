import { Dataset } from './AppModels.ts'

export default class AppService {
    apiUrlEndPoint: string = "http://localhost:4080/";

    constructor() {
        
    }
    public async getData(siteName:string): Promise<Dataset[]> {
        let jsonReturnContent:Dataset[];
        let reqContent = {
            method: 'GET',
            headers: { 'Content-type': 'application/json;charset=UTF-8' },
            body: JSON.stringify({
                "site": siteName
            })
        }
        let rawResponse = await fetch(this.apiUrlEndPoint + 'getData', reqContent);
        
        if (rawResponse.ok === true) {
            jsonReturnContent = await rawResponse.json();
        }
        return new Promise<Dataset[]>((resolve) => { resolve(jsonReturnContent) });
    }
}