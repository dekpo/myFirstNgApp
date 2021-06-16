import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriété title qui ressemble à une variable 
  title = 'This is my Title from TypeScript';

  nb = 0;

  colorRandom = '#FF0000';


  // methode alert() qui ressemble à une fonction
  alert() {
    // on peut déclarer des constantes et des variables dans 
    // les méthodes
    const message = 'This is a message';
    // alert(message);
    // on peut utiliser tous les outils de javascript dans 
    // les méthodes
    console.log(message);

    this.nb++;

    var letters = '0123456789ABCDEF'; 
    var color = '#';    
    for (var i = 0; i < 6; i++) { 
      color += letters[Math.floor(Math.random() * 16)];
    } 
    this.colorRandom = color; 

    console.log('You\’ve clicked:',this.nb + ' times');
  }


}
