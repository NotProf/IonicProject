import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../models/User';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'app-reg',
    templateUrl: './reg.component.html',
    styleUrls: ['./reg.component.scss'],
})
export class RegComponent implements OnInit {

    constructor(public formBuilder: FormBuilder, public router: Router, public http: HttpClient) {
    }

    submitted = false;
    authForm: FormGroup;
    url = 'http://localhost:8080/reg';
    mes = '';
    userexists = false;

    ngOnInit() {
        this.authForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(6)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        }, {});
    }

    onSubmit(value: any): void {

    }

    reg(authForm: FormGroup): void {
            const user: User = authForm.value;
            this.http.post<boolean>(this.url, user).subscribe(value => {
                this.userexists = value;
                if (!this.userexists) {
                    this.mes = 'Username already exist';
                } else {
                    this.mes = 'Thanks for registering!';
                    this.submitted = true;
                    if (this.authForm.invalid) {
                        return;
                    }
                }
            });
    }

}
