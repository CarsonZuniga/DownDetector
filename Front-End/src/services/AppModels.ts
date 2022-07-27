export type Dataset = {
    label:string,
    data:number[],
    borderColor:string,
    backgroundColor:string,
}

export interface ISiteInfoState {
    dataObj: {
        labels:number[],
        datasets:Dataset[]
    },
    hour:number
}