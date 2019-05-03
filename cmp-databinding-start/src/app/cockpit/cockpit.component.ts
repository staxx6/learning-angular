import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter
    <{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter
    <{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  
  // get access to an html element
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }
  
  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent
  //   });
  // }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent
  //   });
  // }
}
