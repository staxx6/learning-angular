import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent 
  implements OnInit, OnChanges, 
    DoCheck , AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragaph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!')
    console.log(changes);
    
  }

  ngOnInit() {
    console.log('ngOnit called!');
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragaph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
    
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log(this.paragaph.nativeElement.textContent);
    
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
    
  }

  ngAfterViewInit(): void {
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
  }

  ngOnDestroy(): void {
  }
}
