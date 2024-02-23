import { Observable, Subject, firstValueFrom, of, tap, timer } from "rxjs";
import { expect, test } from "vitest";
import { waitFor } from "../utils";

let __ = 'FIXME: Fill in the blank';
const fixMeObservable: Observable<string> = null!;

const PASSED = 'Passed';

test.skip("Observables are cold", async () => {

  // Arrange
  let result = __;

  // Act
  timer(500).pipe(
    tap(() => result = PASSED)
  );

  // FIXME

  await waitFor(1000);

  // Assert
  expect(result).toBe(PASSED);
});

test.skip('simple return', () => {

  // Arrange
  let emitter = fixMeObservable; // FIXME

  // ACT 
  emitter!.subscribe(received => expect(received).toBe(PASSED));
});

test('as promise', async () => {

  // ACT 
  // FIXME
  const result = await firstValueFrom(fixMeObservable);

  //Assert
  expect(result).toBe(PASSED);
});

test.skip('what comes in goes out 1', () => {

  // Act
  of(__).subscribe(result => {

    // Assert
    expect(result).toBe(PASSED);
  });

});

test.skip('what comes in goes out 2', () => {
  // Arrange
  const emitter = new Subject<string>();

  // Act
  emitter.subscribe(result => {
    // Assert
    expect(result).toBe(PASSED);
  });

  emitter.next(__);
});


test.skip('streams have multiple results', () => {
  // Arrange
  const emitter = new Subject<number>();
  const result: number[] = [];

  // Act
  emitter.subscribe(x => result.push(x));

  // FIXME

  // Assert
  expect(result).toEqual([1, 2, 3]);
});

