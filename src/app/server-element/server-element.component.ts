import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, AfterContentInit, ViewChild, ElementRef, AfterViewInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class ServerElementComponent implements OnInit,OnChanges ,AfterContentInit,AfterViewInit{
   @Input('srvelement') element:{type:string,name:string,content:string};
@Input() name:string;
@ViewChild('heading') header:ElementRef;
@ContentChild('contentParagraph') paragraph:ElementRef;
  constructor() { }

  ngOnChanges(changes: SimpleChanges)
  {
console.log(changes);
  }

  ngOnInit()
   {

  }

ngAfterContentInit()
{
  console.log("text-content "+this.paragraph.nativeElement.textContent);
  
}
ngAfterViewInit()
{
  console.log("text content "+this.header.nativeElement.textContent);
  
}

}
