import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-common-view',
  templateUrl: './common-view.component.html',
  styleUrls: ['./common-view.component.css']
})
export class CommonViewComponent implements OnInit {

  public Editor = ClassicEditor;
  public text = 'Dummy text goes here';


  constructor() { }

  ngOnInit() {
  }

}
