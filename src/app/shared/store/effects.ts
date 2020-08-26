import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { BooksService } from '../services/books.service';

@Injectable()
export class ShopEffects {
  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.booksService.getBooks().pipe(
        map(data => {
          console.log('data effects :: ',data)
          return { type: ActionTypes.LoadSuccess, payload: data };
        }),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) {}
}
