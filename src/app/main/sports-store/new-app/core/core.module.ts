import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { SharedState } from "./sharedState.model";
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule, FormsModule, ModelModule],
    declarations: [TableComponent, FormComponent],
    exports: [ModelModule, TableComponent, FormComponent],
    providers: [SharedState]
})
export class CoreModule { }
