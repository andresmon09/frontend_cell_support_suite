import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from '@capacitor/app';
@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
constructor(private browser:InAppBrowser) {}
url = "https://cellsuite.website/";
modo = "_self";
ordenes = 'location=no,hidenavegationbuttons=true,hideurlbar=true,zoom=no';
ngOnInit(): void {
const browserInstance = this.browser.create(this.url,this.modo,this.ordenes);
browserInstance.on("exit").subscribe(evt=>{
App.exitApp();
})
}
}