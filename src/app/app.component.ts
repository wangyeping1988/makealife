import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'makealife-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'makealife';

  isLogin = false;

  ngOnInit(): void {
    this.isLogin = true;
  }
}
