import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService, Login} from "./login.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(private httpClient: HttpClient, private login: LoginService) {

    }

    public get<T>(name: string, login: Login = null): Observable<T> {
        if (login == null)
            login = this.login.login;
        console.log("+GET " + login.server + " / " + name);
        return this.httpClient.get<T>(login.server + "/" + name, {
            params: {
                token: login.token
            }
        })
    }

    public put<T>(name: string, data): Observable<T> {
        return this.httpClient.put<T>(this.login.login.server + "/" + name, data, {
            params: {
                token: this.login.login.token
            }
        });
    }

    public errorText(e): string {
        if (e.statusText !== null)
            return e.status + " " + e.statusText;

        return e;
    }
}
