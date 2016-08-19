import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
   socket = null;
  
  constructor(private navController: NavController) {
//      this.socket = io('http://localhost:4200');
//      this.socket.on('connect', function(data) {
//      alert('you are conected');
//     this.socket.emit('join', 'Hello World from client Api');

//  });
//  this.socket.on('broad', function(data) {
//         alert(data);
//    });
  
  }

 


}
