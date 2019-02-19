import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  
  @Input() posttitle : String;
  @Input() postcontent : String;
  @Input() postloveIts : number;
  @Input() postcreated_at =  Date;
  
  
  constructor() { }

  ngOnInit() {
  }
  
  increaseLove(){
	this.postloveIts += 1;
  }
  decreaseLove(){
	return this.postloveIts -= 1;
  }


}

