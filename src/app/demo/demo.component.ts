import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }
  title = 'aaaah';
  items = ['nico', 'seba', 'cris', 'felipe'];
  addItem(): void{
    this.items.push(this.title);
  }
  ngOnInit(): void {
  }

}
