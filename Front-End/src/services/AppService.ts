import { Dataset } from './AppModels'

export default class AppAssetService {
    apiUrlEndPoint: string = "http://localhost:4080/";
    getMethodCall: any;
    postMethodCall: any;
    deleteMethodCall: any;

    constructor() {
        
    }
    public async getData(): Promise<Dataset[]> {
        let jsonReturnContent:Dataset[];
        let reqContent = {
            method: 'GET',
            headers: { 'Content-type': 'application/json;charset=UTF-8' },
            body: JSON.stringify({
                "site": "google.com"
            })
        }
        let rawResponse = await fetch(this.apiUrlEndPoint + 'getData', this.getMethodCall);
        
        if (rawResponse.ok === true) {
            jsonReturnContent = await rawResponse.json();
        }
        return new Promise<Dataset[]>((resolve) => { resolve(jsonReturnContent) });
    }
}