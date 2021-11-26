
import { NgModule } from "@angular/core";
import { BannerComponent } from "./components/banner/banner.component";
import { HomeroutingModule } from "./home-routing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./components/home/home.component";


@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeroutingModule,
        SharedModule
    ]
})
export class HomeModule {

}
