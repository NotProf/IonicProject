import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MoviePage} from '../app/movie/movie.page';

@Injectable()
export class MessageService {



    private subject = new Subject<any>();

    sendMessage(message: string): void {
        this.subject.next({text: message});
    }

    clearMessage(): void {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
