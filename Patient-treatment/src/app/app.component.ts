import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="height:100vh" >
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['../styles.css'],
})

export class AppComponent {
  title = 'Patient-treatment';

  constructor() { }

  ngOnInit(): void {
    
  }
}
