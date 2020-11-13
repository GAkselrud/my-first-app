import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html', 

})
export class ServersComponent implements OnInit {
allowNewserver = false;
serverCreationStatus = 'No Server was Created!';

  constructor() {
    setTimeout(() => {
      this.allowNewserver = true;
    }, 2000);
  }

    ngOnInit() {
   }
   onCreateServer() {
     this.serverCreationStatus = 'Server was created!';
   }
}
