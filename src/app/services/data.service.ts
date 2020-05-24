import {Injectable} from '@angular/core';
import {RestService} from "./rest.service";
import {ServerState} from "./login.service";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    beebots: ServerState[] = [];

    constructor(public rest: RestService) {
        setTimeout(()=>this.reloadBeeBots(),5000);
    }

    reloadBeeBots() {
        console.log("Reloading BeeBots");
        this.rest.get<ServerState[]>('beebot').subscribe(e => {
            this.beebots = e;
            console.log("Got " + e.length + " BeeBots");
        })
    }


}
