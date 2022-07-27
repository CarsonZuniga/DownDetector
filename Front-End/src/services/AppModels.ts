import AppService from './AppService.ts'

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

export interface IGlobalProp {
    appServiceObj:AppService;
}

export interface ISiteProp extends IGlobalProp{
    siteName:string
}