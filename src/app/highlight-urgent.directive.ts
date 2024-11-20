import { Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlightUrgent]',
})
export class HighlightUrgentDirective implements OnInit{
  @Input() dueDate!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.isUrgent()) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        '#ffe6e6'
      );
    }
  }

  private isUrgent(): boolean {
    const due = new Date(this.dueDate).getTime();
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    return due - now <= oneDay && due > now;
  }
}
