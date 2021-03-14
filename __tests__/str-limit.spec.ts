import { str_limit } from '../src';

test('if a string was limited by 20', () => {
  const word = str_limit(`HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display`, 20);

  expect(word).toBe('HP 24mh FHD Monitor...');
});
