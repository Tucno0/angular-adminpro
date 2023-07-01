import { Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map, tap } from 'rxjs';

@Component({
  selector: 'shared-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styles: [],
})
export class BreadCrumbsComponent implements OnDestroy {
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  public titulo!: string;
  public tituloSubs$!: Subscription;

  constructor() {

    console.log(this.route.snapshot.children[0].data['titulo']);

    this.tituloSubs$ = this.getArgumentosRuta().subscribe((titulo) => {
      this.titulo = titulo;
      document.title = `AdminPro - ${titulo}`;
      console.log(titulo);
    });

  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events.pipe(
      map((e) => {
        if (e instanceof ActivationEnd && e.snapshot.firstChild === null) {
          return e.snapshot.data['titulo'];
        }
        return 'No hay titulo';
      }),
      filter((e) => !(e === 'No hay titulo'))
      // tap( (e) => (e.snapshot.data['titulo'] === undefined) ? 'No hay titulo' : e ),
      // filter( (e) => e !== undefined )

      // map( (e: Event) => {
      //   const event = e as ActivationEnd;
      //   return event.snapshot.data;
      // })
    );
  }
}
