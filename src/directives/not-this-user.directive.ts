import {Directive, ElementRef, OnInit} from '@angular/core';
import {UserpagePage} from '../app/userpage/userpage.page';

@Directive({
    selector: '[appNotThisUser]'
})
export class NotThisUserDirective implements OnInit {

    constructor(private elRef: ElementRef, private userP: UserpagePage) {
    }

    ngOnInit(): void {
        console.log(this.userP.thisUser.id);
        console.log(this.userP.currentUser.id);
        if (this.userP.thisUser.id === this.userP.currentUser.id) {
            this.elRef.nativeElement.style.display = 'none';
        }
    }

}
