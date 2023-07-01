import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {
    // this.retornaObservable()
    //   .pipe(
    //     retry(2) // reintentar el observable 2 veces cuando hay un error
    //   )
    //   .subscribe({
    //     next: (v) => console.log(`Subs: ${v}`), // recibe el valor
    //     error: (e) => console.warn('Error', e), // recibe el error
    //     complete: () => console.info('Observable terminado'), // recibe el complete
    //   });

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      map((valor) => valor + 1), // transforma el valor
      filter((valor) => valor % 2 === 0), // filtra el valor si es par o impar, deja pasar solo los pares (true)
      // take(10), // emite 10 valores y termina el observable

    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i); // emite el valor

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete(); // termina el observable
        }

        if (i === 2) {
          observer.error('i llego al valor de 2'); // emite un error
        }
      }, 1000);

      console.log(observer);
    });
  }
}
