import {Axios, AxiosResponse} from 'axios';
import {Routes} from "../routes/Routes";
import {config} from "dotenv";
import {InterfaceResponse} from "./InterfaceResponse";
import {InterfacesRequest} from "../routes/InterfacesRequest";
config();
export class AxiosServices {
    constructor(private readonly axiosService: Axios, private readonly routes: Routes) {
        this.axiosService = new Axios({
            headers: {
                "TRN-Api-Key": process.env.APEX_API_TOKEN.toString(),
                "Accept": "application/json",
                "Accept-Encoding": "gzip"
            }
        });
    }
    get carreerStatApexPlayer():Promise<AxiosResponse<InterfaceResponse>>{
        return this.axiosService.get(this.routes.playerStatRoute);
    }
    set playerStatRoute(value:InterfacesRequest){
        this.routes.playerStatsRoutes = value;
    }

}