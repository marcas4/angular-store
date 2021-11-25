
import { NgModule } from "@angular/core";
import { BannerComponent } from "./components/banner/banner.component";
import { HomeroutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeroutingModule
    ]
})
export class HomeModule {

}
