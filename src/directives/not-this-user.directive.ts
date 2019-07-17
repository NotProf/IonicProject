import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core';
import {UserpagePage} from '../app/userpage/userpage.page';

@Directive({
    selector: '[appNotThisUser]'
})
export class NotThisUserDirective implements OnInit {

    constructor(private elRef: ElementRef, private userP: UserpagePage) {
    }

    ngOnInit(): void {
            if (this.userP.thisUser.id !== this.userP.currentUser.id) {
                this.elRef.nativeElement.style.display = 'none';
            }
    }

}
