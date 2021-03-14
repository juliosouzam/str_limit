import { str_limit } from "../src";

test("if a string was limited by default (30)", () => {
  const word = str_limit(
    `HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display`
  );

  expect(word).toBe("HP 24mh FHD Monitor - Computer...");
});

test("if a string was limit passing a length 20", () => {
  const word = str_limit(
    `HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display`,
    20
  );

  expect(word).toBe("HP 24mh FHD Monitor...");
});

test("if a string was limit passing a length 20 and passing a ending symbol", () => {
  const word = str_limit(
    `HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display`,
    20,
    "###"
  );

  expect(word).toBe("HP 24mh FHD Monitor###");
});

test("if a string length is less then a lenght limit", () => {
  const word = str_limit(`HP 24mh`);

  expect(word).toBe("HP 24mh");
});
