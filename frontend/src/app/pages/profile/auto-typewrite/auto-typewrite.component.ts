import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { of, Observable, Subject, zip, concat } from 'rxjs';
import { delay, concatMap, debounceTime, map, withLatestFrom, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-auto-typewrite',
  templateUrl: './auto-typewrite.component.html',
  styleUrls: ['./auto-typewrite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoTypewriteComponent implements OnInit {
  messages: string[] = [];
  message$: Observable<string>;

  constructor() {}

  ngOnInit(): void {
    this.messages = ['Hello world', 'Loren ipsum', 'The quick brown fox jumps over the lazy dog'];
    this.autoType();
  }

  autoType() {
    let currentMessage = '';
    const array: Observable<string>[] = [];

    const deleteCurrentMessage$ = of(null).pipe(
      concatMap(() => {
        return of(...currentMessage);
      }),
      concatMap(() => {
        currentMessage = currentMessage.slice(0, -1);

        return of(currentMessage).pipe(delay(100));
      }),
    );

    this.messages.forEach((element, index) => {
      array.push(
        of(element).pipe(
          concatMap((message) => {
            return of(...message);
          }),
          concatMap((newCharacter) => {
            currentMessage = currentMessage + newCharacter;
            return of(currentMessage).pipe(delay(100));
          }),
        ),
      );

      if (index < this.messages.length - 1) {
        array.push(
          of(null).pipe(
            delay(1500),
            concatMap(() => of(currentMessage)),
          ),
        );

        array.push(deleteCurrentMessage$);
      }
    });

    this.message$ = concat(...array);
  }
}
