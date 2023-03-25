import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from "./app-routing.module";
import {MainComponent} from "./layouts/main/main.component";
import {LoginComponent} from "./layouts/login/login.component";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {RegistrationComponent} from "./layouts/registration/registration.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormValidationComponent} from "./shared/form-validation.component";

@NgModule({
    declarations: [
        MainComponent,
        LoginComponent,
        RegistrationComponent,
        NotFoundComponent,
        FormValidationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    ],
    bootstrap: [MainComponent],
})
export class AppModule {
}
