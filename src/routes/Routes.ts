import {InterfacesRequest} from "./InterfacesRequest";

export class Routes {
    private baseUrl:string;
    private playerStatsRoute:string;
    private apexPlayerName:string;
    private apexPlayerPlatform:string;
    constructor() {
        this.baseUrl = "https://public-api.tracker.gg/";
    }
    get playerStatRoute(){
        return this.baseUrl+this.playerStatsRoute;
    }
    set playerStatsRoutes(value:InterfacesRequest){
        this.apexPlayerName = value.playerName;
        this.apexPlayerPlatform = value.platform;
        this.playerStatsRoute = `v2/apex/standard/profile/${this.apexPlayerPlatform}/${this.apexPlayerName}`;
    }
}