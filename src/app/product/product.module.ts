import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { SharedModule } from "../shared/shared.module";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product/product.component";
import { ProductsComponent } from "./products/products.component";


@NgModule({
    declarations: [
        ProductComponent,
        ProductDetailComponent,
        ProductsComponent
    ],
    imports: [
       CommonModule,
       SharedModule,
       ProductRoutingModule,
       MaterialModule
    ]
})
export class ProductModule {}