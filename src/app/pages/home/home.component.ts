import { Component, OnInit, Inject  } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  arrayImages = ['pier-407252_640.jpeg', 'lake-1679708_640.jpeg', 'lake-1681485_640.jpeg', 'sunrise-1634197_640.jpeg'];
  jsonImages = [
    {
      title: 'Ponton',
      url: 'pier-407252_640.jpeg',
      author: 'Pierre Paul'
    },
    {
      title: 'Lac I',
      url: 'lake-1679708_640.jpeg',
      author: 'Bill Gates'
    },
    {
      title: 'Lac II',
      url: 'lake-1681485_640.jpeg',
      author: 'Lara Croft'
    },
    {
      title: 'Sunrise',
      url: 'sunrise-1634197_640.jpeg',
      author: 'James Bond'
    },
    {
      title: 'Ponton',
      url: 'pier-407252_640.jpeg',
      author: 'Pierre Paul'
    }
  ];
  randomIndex = Math.floor(Math.random() * this.arrayImages.length);
  sourceImage = this.arrayImages[this.randomIndex];

  console(str: string) {
    console.log(str);
  }

  changeRandom(){
    this.randomIndex = Math.floor(Math.random() * this.arrayImages.length);
    this.console('randomIndex' + this.randomIndex);
  }

  valColor = 'red';

  textPrimary = false;
  displayParag= true;

  displaySwitch = 1;

  incSwitch(){
    this.displaySwitch++;
    this.displaySwitch = this.displaySwitch>3 ? 1 : this.displaySwitch;
    // if (this.this.displaySwitch>3) { this.displaySwitch=1 } else { this.displaySwitch = this.displaySwitch }
  }

 

  ngOnInit(): void {
    console.log('randomIndex:', this.randomIndex);
    console.log('sourceImage:', this.sourceImage);
    console.log('jsonImagesRandomTitle',this.jsonImages[this.randomIndex].title)
  }

}
