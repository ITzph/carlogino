import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { of, Observable, concat } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-auto-typewrite',
  templateUrl: './auto-typewrite.component.html',
  styleUrls: ['./auto-typewrite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoTypewriteComponent implements OnInit {
  @Input() messages: string[] = [];

  message$: Observable<string>;

  ngOnInit(): void {
    this.autoType();
  }

  autoType() {
    const TYPING_SPEED_DELAY = 30;
    const ERASE_SPEED_DELAY = 10;
    const READING_DELAY_MULTIPLIER = 30;

    let currentMessage = '';
    const array: Observable<string>[] = [];

    const deleteCurrentMessage$ = of(null).pipe(
      concatMap(() => {
        return of(...currentMessage);
      }),
      concatMap(() => {
        currentMessage = currentMessage.slice(0, -1);

        return of(currentMessage).pipe(delay(ERASE_SPEED_DELAY));
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
            return of(currentMessage).pipe(delay(TYPING_SPEED_DELAY));
          }),
        ),
      );

      if (index < this.messages.length - 1) {
        array.push(
          of(null).pipe(
            concatMap(() =>
              of(currentMessage).pipe(delay(READING_DELAY_MULTIPLIER * currentMessage.length)),
            ),
          ),
        );

        array.push(deleteCurrentMessage$);
      }
    });

    this.message$ = concat(...array);
  }
}
