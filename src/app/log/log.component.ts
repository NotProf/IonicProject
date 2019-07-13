import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {UserServiceService} from '../../services/user-service.service';

@Component({
    selector: 'app-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

    constructor(public formBuilder: FormBuilder, public router: Router, public userS: UserServiceService) {
    }

    submitted = false;
    authForm: FormGroup;
    mes = '';

    ngOnInit() {
        this.authForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(4)]],
            password: ['', [Validators.required, Validators.minLength(4)]]
        }, {});
    }

    login(authForm: FormGroup) {
            this.userS.Login(authForm.value).subscribe(value => {
                if (this.authForm.invalid) {
                    return;
                }
                const token = value.headers.get('Authorization');
                const currentUser = value.headers.get('CurrentUser');
                localStorage.setItem('_currentUser', currentUser);
                localStorage.setItem('_token', token);
                this.submitted = true;
                this.router.navigateByUrl('/home');
            }, () => {
                this.mes = 'Неправильно вказані дані або не активований акаунт';
            });
        }
}
