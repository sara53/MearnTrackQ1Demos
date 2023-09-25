import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PromotionadsService } from 'src/app/services/promotionads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  newAd: string = '';
  adObserver: Subscription | undefined;
  constructor(private promotionService: PromotionadsService) {}
  ngOnDestroy(): void {
    this.adObserver?.unsubscribe();
  }
  ngOnInit(): void {
    this.adObserver = this.promotionService.getScheduledAd().subscribe({
      next: (myAd: string) => {
        this.newAd = myAd;
      },
      error: (myError: string) => {
        console.log(myError);
      },
      complete: () => {
        console.log('All Offers finshed');
      },
    });
    // this.adObserver = this.promotionService.getScheduledAd().subscribe(
    //   ()=>{},
    // );
  }
}
