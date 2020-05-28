import {Injectable} from '@angular/core';
import {RestService} from "./rest.service";
import {LoginService, ServerState} from "./login.service";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    beebots: ServerState[];

    constructor(public rest: RestService,public login:LoginService) {
        setTimeout(()=>this.reloadBeeBots(),2500);
    }

    reloadBeeBots() {
        if (this.login.login==null){
            setTimeout(()=>this.reloadBeeBots(),5000);
            return;
        }
        console.log("Reloading BeeBots");
        this.rest.get<ServerState[]>('beebot').subscribe(e => {
            this.beebots = e;
            console.log("Got " + e.length + " BeeBots");
        },e=>{
            setTimeout(()=>this.reloadBeeBots(),5000);
        })
    }


}
