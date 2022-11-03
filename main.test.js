//👉 Write your tests below here:
import { expect, test } from "@jest/globals"
import {howManyTiles} from './main.js'

test(`When given a dimension including zero, the return is null.`, () => {
    const actual = howManyTiles([3,0,0.6,0.3]);
    const expected = null;
    expect(actual).toBe(expected);})

test('When given dimensions including negative numbers, the return is null', () => {
    const actual = howManyTiles([-3,12,1,0.5]);
    const expected = null;
    expect(actual).toBe(expected)
})

test('Basic number test 1', () =>{
    const actual = howManyTiles([5,2,0.6,0.2])
    const expected = 84
    expect(actual).toBe(expected)
})

test('Basic number test 2', () =>{
    const actual = howManyTiles([800,2000,12,0.2])
    const expected = 666667
    expect(actual).toBe(expected)
})

test('Basic number test 3', () =>{
    const actual = howManyTiles([3,1.5,3,0.2])
    const expected = 8
    expect(actual).toBe(expected)
})



