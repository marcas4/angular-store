import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { Product} from "../product.model";

@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html'
})

export class ProductComponent {
      
    @Input() product!: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('1. constructor')
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('2. ngOnChanges');
        console.log(changes);
    }

    ngOnInit(): void {
       console.log('3. ngOnInit');
    }

    addCart() {
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }

 }