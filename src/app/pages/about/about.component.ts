import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {

  galery: any;
  page = 1;
  inc = 1;
  paramPage = '';


  constructor(private http: HttpClient,private route:ActivatedRoute) { }

  loadPics(way='',nb=this.page){
    // évalue la valeur de 'way'
    // et définit des cas pour 'next' pour 'prev'
    switch(way){
      case 'next':
        this.page++;
        break;
      case 'prev':
        // seulement si page est sup à 1
        // enlève 1 à page sinon rien
        this.page>1 ? this.page-- : null;
        break;
      case '':
        this.page = nb;
      break;
    }
    console.log('Way & Page:',way +' ' +this.page);
    const URL = "https://picsum.photos/v2/list?page="+this.page+"&limit=12";
    this.http.get(URL).subscribe(
      (data) => {
        this.galery = data;
        console.log(this.galery);
      }
    ) 
  }
  
  biduleScroll(){
    console.log(`Hello World ${this.inc++}` );
  }

  ngOnInit(): void {
    this.paramPage = this.route.snapshot.params.pageId;
    console.log(`Param Page ${this.paramPage}`);
    if (this.paramPage!=undefined){
      this.loadPics('',Number(this.paramPage));
    } else {
      this.loadPics();
    }
    console.log(`Page ${this.page}` );
    /* window.addEventListener('scroll', () => {
      this.biduleScroll();
    }, true); */
  } 

}
