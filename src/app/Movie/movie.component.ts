import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  title='this  is  miiii';

  constructor() { }

  ngOnInit() {
  }
  hi(){
  alert('hi');
  }

}
