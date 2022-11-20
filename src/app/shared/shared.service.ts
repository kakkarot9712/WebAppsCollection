import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})

export class SharedService {
    showAlert = new Subject<{alertType: string, alertmsg: string}>()
    constructor(){}
}
