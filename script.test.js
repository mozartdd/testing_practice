import { capitalize, reverseString } from "./script";

test('Expects parameter input "jack" to return "Jack"', () => {
  expect(capitalize('jack')).toBe('Jack');
});
test('Expect parameter input John to return nhoJ', () => {
  expect(reverseString('John')).toBe('nhoJ');
});