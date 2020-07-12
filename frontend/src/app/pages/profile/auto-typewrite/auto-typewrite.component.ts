import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { of, Observable, concat } from 'rxjs';
import { delay, concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-auto-typewrite',
  templateUrl: './auto-typewrite.component.html',
  styleUrls: ['./auto-typewrite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoTypewriteComponent implements OnInit {
  @Input() messages: string[] = [];
  @Output() completed = new EventEmitter<boolean>();

  private readonly TYPING_SPEED_DELAY = 30;
  private readonly ERASE_SPEED_DELAY = 10;
  private readonly READING_DELAY_MULTIPLIER = 30;

  private currentMessage = '';

  message$: Observable<string>;

  ngOnInit(): void {
    this.autoType();
  }

  private addIndividualCharacters$(element) {
    return of(element).pipe(
      concatMap((message) => {
        return of(...message);
      }),
      concatMap((newCharacter) => {
        this.currentMessage = this.currentMessage + newCharacter;
        return of(this.currentMessage).pipe(delay(this.TYPING_SPEED_DELAY));
      }),
    );
  }

  private deleteCurrentMessage$() {
    return of(null).pipe(
      concatMap(() => {
        return of(...this.currentMessage);
      }),
      concatMap(() => {
        this.currentMessage = this.currentMessage.slice(0, -1);

        return of(this.currentMessage).pipe(delay(this.ERASE_SPEED_DELAY));
      }),
    );
  }

  private pauseBeforeDeleting$() {
    return of(null).pipe(
      concatMap(() =>
        of(this.currentMessage).pipe(
          delay(this.READING_DELAY_MULTIPLIER * this.currentMessage.length),
        ),
      ),
    );
  }

  private emitCompleteTyping$() {
    return of(null).pipe(
      concatMap(() => of(this.currentMessage).pipe(tap(() => this.completed.emit(true)))),
    );
  }

  private autoType() {
    const array: Observable<string>[] = [];

    this.messages.forEach((element, index) => {
      array.push(this.addIndividualCharacters$(element));

      if (index < this.messages.length - 1) {
        array.push(this.pauseBeforeDeleting$());
        array.push(this.deleteCurrentMessage$());
      } else {
        array.push(this.emitCompleteTyping$());
      }
    });

    this.message$ = concat(...array);
  }
}
