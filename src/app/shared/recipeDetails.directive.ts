import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: "[showDetails]"
})
export class RecipeDetailsDirective implements OnInit{
    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    isOpen = false

    @HostListener("click") showDetails(){
        this.isOpen = !this.isOpen;
    }

    ngOnInit(): void {
        
    }
}