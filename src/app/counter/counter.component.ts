import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../state/counter.actions';
 
@Component({
  selector: 'counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass'],
})
export class MyCounterComponent {
  count$: Observable<number>;
 
  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.pipe(select('counter'));
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}