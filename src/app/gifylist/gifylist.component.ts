import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifylist',
  templateUrl: './gifylist.component.html',
  styleUrls: ['./gifylist.component.scss']
})
export class GifylistComponent implements OnInit,OnDestroy {
  public GifList :any []= [];
  subscription!: Subscription;
  constructor(private dataService : DataService) { }
  

  ngOnInit(): void {
    this.dataService.gifTrendingList();
    this.subscription = this.dataService.getGif().subscribe((response : any) =>{
      this.GifList = response;
      console.log("Data", this.GifList);
    });
   
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

 


}
