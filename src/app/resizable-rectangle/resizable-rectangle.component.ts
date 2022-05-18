import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-resizable-rectangle',
  templateUrl: './resizable-rectangle.component.html',
  styleUrls: ['./resizable-rectangle.component.scss']
})

export class ResizableRectangleComponent {

  @Input('width') public width: number;
  @Input('height') public height: number;
  @Input('left') public left: number;
  @Input('top') public top: number;

  rectPos: any;
  status: number = 0;

  dimensionsSetup() {
    this.width = this.width ? this.width : 100;
    this.height = this.height ? this.height : 100;
    this.top = this.top ? this.top : 100;
    this.left = this.left ? this.left : 100;
    this.rectPos = {
      left: this.left,
      right: this.left + this.width,
      top: this.top,
      bottom: this.top + this.height
    }
  }

  ngAfterViewInit() {
    this.dimensionsSetup();
  }


  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.status == 1) {
      if (this.rectPos.bottom > event.clientY) {
        this.top = event.clientY;
        this.height = this.rectPos.bottom - event.clientY;
        this.rectPos.top = event.clientY;
      }
    }
    else if (this.status == 2) {
      if (event.clientX > this.rectPos.left) {
        this.width = event.clientX - this.rectPos.left;
        this.rectPos.right = event.clientX;
      }
    }
    else if (this.status == 3) {
      if (event.clientY > this.rectPos.top) {
        this.height = event.clientY - this.rectPos.top;
        this.rectPos.bottom = event.clientY;
      }
    }
    else if (this.status == 4) {
      if (this.rectPos.right > event.clientX) {
        this.left = event.clientX;
        this.width = this.rectPos.right - event.clientX;
        this.rectPos.left = event.clientX;
      }
    }
    else if (this.status == 5) {
      if (this.rectPos.right > event.clientX) {
        this.left = event.clientX;
        this.width = this.rectPos.right - event.clientX;
        this.rectPos.left = event.clientX;
      }
      if (this.rectPos.bottom > event.clientY) {
        this.top = event.clientY;
        this.height = this.rectPos.bottom - event.clientY;
        this.rectPos.top = event.clientY;
      }
    }
    else if (this.status == 6) {
      if (this.rectPos.bottom > event.clientY) {
        this.top = event.clientY;
        this.height = this.rectPos.bottom - event.clientY;
        this.rectPos.top = event.clientY;
      }
      if (event.clientX > this.rectPos.left) {
        this.width = event.clientX - this.rectPos.left;
        this.rectPos.right = event.clientX;
      }
    }
    else if (this.status == 7) {
      if (event.clientY > this.rectPos.top) {
        this.height = event.clientY - this.rectPos.top;
        this.rectPos.bottom = event.clientY;
      }
      if (event.clientX > this.rectPos.left) {
        this.width = event.clientX - this.rectPos.left;
        this.rectPos.right = event.clientX;
      }
    }
    else if (this.status == 8) {
      if (event.clientY > this.rectPos.top) {
        this.height = event.clientY - this.rectPos.top;
        this.rectPos.bottom = event.clientY;
      }
      if (this.rectPos.right > event.clientX) {
        this.left = event.clientX;
        this.width = this.rectPos.right - event.clientX;
        this.rectPos.left = event.clientX;
      }
    }
  }

  setStatus(event: MouseEvent, status: number) {
    this.status = status;
    event.stopPropagation();
  }
  
}
