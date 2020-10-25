import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-submain-content',
  templateUrl: './submain-content.component.html',
  styleUrls: ['./submain-content.component.scss']
})
export class SubmainContentComponent implements OnInit {

  constructor() { }
  @Input()
  public parentData;
  ngOnInit() {
  }

}
