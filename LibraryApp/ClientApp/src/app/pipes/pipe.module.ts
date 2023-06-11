import { NgModule } from "@angular/core";
import { TextShorter } from "./text-shorter.pipe";
import { DateFormat } from "./date-format.pipe";

@NgModule({
    declarations:[TextShorter,DateFormat],
    exports:[TextShorter,DateFormat]
})
export class PipeModule{}
