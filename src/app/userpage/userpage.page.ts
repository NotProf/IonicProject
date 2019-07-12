import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {Platform} from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
    selector: 'app-userpage',
    templateUrl: './userpage.page.html',
    styleUrls: ['./userpage.page.scss'],
})
export class UserpagePage implements OnInit {

    constructor(public fileChooser: FileChooser, public file: File, public platform: Platform, public camera: Camera) {
    }

    user = new User();
    image = 'assets/ava.jpg';

    ngOnInit() {
    }

    selectFile() {
        // this.fileChooser.open().then((fileuri) => {
        // this.file.resolveLocalFilesystemUrl(fileuri).then((newUrl) => {
        //     this.image = JSON.stringify(newUrl);
        //     const fileReader = new FileReader();
        //     fileReader.(JSON.stringify(newUrl));
        //     fileReader.onload = () => {
        //         // @ts-ignore
        //         this.user.avatar = fileReader.result;
        // const dirPath = newUrl.nativeURL;
        // const dirPathSegment = dirPath.split('/');
        // dirPathSegment.pop();
        // dirPathSegment.join('/');
        // this.file.readAsArrayBuffer(dirPath, newUrl.name).then((buffer) => {
        //     this.image = buffer;
        // });
        // });
        // });
        if (this.platform.is('cordova')) {
            const options: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then((imageData) => {
                this.image = 'data:image/jpeg;base64,' + imageData;
            });
        } else {
            alert('This is BROWSER! Function not working');
        }
    }

    click() {
        location.href = '/logreg/log';
    }
}

