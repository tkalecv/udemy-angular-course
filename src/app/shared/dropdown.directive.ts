import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective implements OnInit{
    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    @HostBinding("class.open") isOpen = false;

    @HostListener("mouseenter") openDropdown(eventData: Event){
        this.isOpen = true;
    }

    @HostListener("mouseleave") closeDropdown(eventData: Event){
        this.isOpen = false;
    }

    ngOnInit(): void {
        
    }
}