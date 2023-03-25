import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {shareReplay, tap} from "rxjs";
import {ApplicationConfigService} from "../config/application-config.service";
import {LoginUser, RegistrationUser} from "../models/user.model";

@Injectable({providedIn: "root"})
export class AuthService {
    constructor(
        private http: HttpClient,
        private config: ApplicationConfigService
    ) {
    }

    register(user: RegistrationUser) {
        return this.http
            .post(this.config.getEndpointFor("api/v1/auth/register"), {
                ...user,
            })
            .pipe(shareReplay())

    }

    login(user: LoginUser) {
        return this.http
            .post(this.config.getEndpointFor("api/v1/auth/login"), {
                ...user
            })
            .pipe(shareReplay())
            .pipe(tap((res) => this.saveSession(res)));
    }

    logout() {
        localStorage.removeItem("id_token");
    }

    private saveSession(token: any) {
        localStorage.setItem("id_token", token.token);
    }
}
