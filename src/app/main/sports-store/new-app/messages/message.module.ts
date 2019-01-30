import { NgModule } from "@angular/core";
import { MessageComponent } from "./message.component";
import { MessageService } from "./message.service";
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [MessageComponent],
    exports: [MessageComponent],
    providers: [MessageService]
})
export class MessageModule { }
