import { Component, inject } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'shared-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styles: [],
})
export class BreadCrumbsComponent {
  private router: Router = inject(Router);

  public titulo = undefined;

  constructor() {
    this.router.events
      .pipe(
        filter((e) => e instanceof ActivationEnd && e.snapshot.data['titulo']),
        // map((e: ActivationEnd) => {
        //   const event = e as ActivationEnd;
        //   return event.snapshot.data;
        // })
      )
      .subscribe((data) => {
        console.log(data);
        // this.titulo = data;
      });
  }
}
