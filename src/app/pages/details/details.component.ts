import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  idPhoto = '';
  infoPhoto:any;
  paramPage = '';

  constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router) { }

  goBackToGallery(){
    this.router.navigateByUrl(`/about/${this.paramPage}`);
  }


  ngOnInit(): void {
    console.log('ID :',this.route.snapshot.params.imgId);
    // récupérer le param id de l'image depuis la route 
    this.idPhoto = this.route.snapshot.params.imgId;
    // récupérer le param id de la page depuis la route  
    this.paramPage = this.route.snapshot.params.pageId;
    // on charge les infos de l'image depuis l'API grace à son id 
    this.http.get("https://picsum.photos/id/"+this.idPhoto+"/info").subscribe(
      (data) => {
        this.infoPhoto = data;
        console.log('infoPhoto',this.infoPhoto);
      }
    ) 
  }
}
