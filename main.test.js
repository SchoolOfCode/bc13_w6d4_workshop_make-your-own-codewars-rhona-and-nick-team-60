//👉 Write your tests below here:
import { expect, test } from "@jest/globals"
import {howManyTiles} from './main.js'

test(`When given a dimension including zero, the return is null.`, () => {
    const actual = (howManyTiles([3,0,0.6,0.3]));
    const expected = "null";
  
    expect(actual).toBe(expected);})