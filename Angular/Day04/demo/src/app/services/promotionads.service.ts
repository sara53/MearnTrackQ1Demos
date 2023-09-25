import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionadsService {
  adsList: string[] = [
    'Special Offer,  up to 70 %',
    'White firday',
    'Sale up to 20 ',
    //'',
    'Buy One get 2 Free',
  ];

  /**
   * unsubscribe
   *
   *  1- Error
   *  2- Completed
   *  3- unsubscribe

   */
  constructor() {}

  getScheduledAd(): Observable<string> {
    let count = 0;
    let myObservable = new Observable<string>((observer) => {
      /**
       * observer.next()
       * observer.error()
       * observer.complete()
       */

      let adsTimer = setInterval(() => {
        console.log('Start of Interval');
        if (this.adsList[count] == '') {
          observer.error('Error , Empty Add');
        }
        if (count === this.adsList.length) {
          observer.complete();
        }
        observer.next(this.adsList[count]);
        count++;
      }, 2000);

      return {
        unsubscribe() {
          clearInterval(adsTimer);
        },
      };
    });

    return myObservable;
  }
}
