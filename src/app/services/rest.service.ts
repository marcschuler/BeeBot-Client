import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService, Login} from "./login.service";
import {Observable} from "rxjs";
import {ToastController} from "@ionic/angular";

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(private httpClient: HttpClient, private login: LoginService, private toast:ToastController) {

    }

    public botClients(bid: string):Observable<ClientReference[]>{
        return this.get('beebot/' + bid + '/clients');
    }
    public botChannels(bid: string):Observable<ChannelReference[]>{
        return this.get('beebot/' + bid + '/channels');
    }
    public botGroupsServer(bid: string):Observable<GroupReference[]>{
        return this.get('beebot/' + bid + '/groups/server');
    }
    public botGroupsChannel(bid: string):Observable<GroupReference[]>{
        return this.get('beebot/' + bid + '/groups/channel');
    }


    botModuleCreate(bid: string, mid: string, moduleConfig: any):Observable<Violation[]> {
        return this.put('beebot/' + bid + '/modules/' + mid,moduleConfig);
    }
    botModules(bid: string):Observable<WorkerData[]>{
        return this.get('beebot/' + bid + '/modules')
    }
    botModule(bid: string, mid: string):Observable<WorkerData>{
        return this.get('beebot/' + bid + '/modules/' + mid);
    }
    botModulesDelete(bid: string, mid: string):Observable<any> {
        return this.delete('beebot/' + bid + '/modules/' + mid);
    }
    modulesWebValue(mid: string):Observable<any[]> {
        return this.get<any[]>('modules/webvalue/' + mid);
    }


    public get<T>(name: string, login: Login = null): Observable<T> {
        if (login == null)
            login = this.login.login;
        if (login==null){
            login=new Login();
            this.onError("You are not logged in");
        }
        console.log("WEB GET " + this.genURL(name, login))
        const http =  this.httpClient.get<T>(login.server + "/" + name, {
            params: {
                token: login.token
            }
        }).pipe()
        http.subscribe(()=>{}, e => this.onError(e))
        return http;
    }

    public put<T>(name: string, data): Observable<T> {
        let login = this.login.login;
        if (login==null){
            login=new Login();
            this.onError("You are not logged in");
        }
        console.log("WEB PUT " + this.genURL(name, login))
        const http = this.httpClient.put<T>(this.genURL(name, this.login.login), data, {
            params: {
                token: login.token
            }
        }).pipe();
      //  http.subscribe(()=>{}, e => this.onError(e))
        return http;
    }


    delete<T>(name: string) :Observable<T>{
        let login = this.login.login;

        console.log("WEB DEL " + this.genURL(name, login))
        const http =  this.httpClient.delete<T>(this.genURL(name, login), {
            params: {
                token: login.token
            }
        }).pipe()
        http.subscribe(()=>{}, e => this.onError(e))
        return http;
    }

    private onError(e) {
        this.toast.create({
            header:'Network Error',
            message: this.errorText(e),
            duration: 3000
        }).then(t => t.present());
    }

    private genURL(name, login: Login) {
        if (login==null){
            login=new Login();
            this.onError("You are not logged in");
        }
        return login.server + "/" + name;
    }

    public errorText(e): string {
        if (e.statusText !== null)
            return e.status + " " + e.statusText;

        return e;
    }
}
export class ChannelReference{
    id: number;
    name: string;
}

export class ClientReference{
    id: number;
    name: string;
}

export class GroupReference{
    id: number;
    name: string;
}

export class Violation{
    path: string;
    violation: string
}

export class WorkerData{
    id: string;
    moduleId: string;
    botId: string;
    name: string;
    description: string;

    logs : LogEntry[];
}

export class LogEntry{
    datetime: Date;
    type: string;
    message: string;
}