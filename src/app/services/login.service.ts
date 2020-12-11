import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';


export class Login {
    token: string;
    server: string;
}

export class ServerState {
    id: string;
    online: boolean;
    teamspeakConfig: TeamspeakConfig;
}

export class TeamspeakConfig {
    name: string;
    host: string;
    username: string;
    password: string;
    virtualServer = 1;
    flood = false;
    nickname: string;
}

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    login: Login;

    ready = false;


    constructor(private storage: Storage) {
        this.init();
    }

    async init() {
        // this.login = JSON.parse(localStorage.getItem('login'));
        this.login = await this.storage.get('login');
        this.ready = true;
    }

    saveLogin(login: Login) {
        this.login = login;
        // localStorage.setItem('login',JSON.stringify(this.login));
        this.storage.set('login', login);
    }
}
