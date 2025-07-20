import {capitalize} from "./script";

test('Expects parameter input "jack" to return "Jack"', () => {
  expect(capitalize('jack')).toBe('Jack');
});