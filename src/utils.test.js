const {checkNoMoreLegalMoves} = require("./utils.js")

describe("checkNoMoreLegalMoves()", () => {
    test("returns false when passed a nested array with a single null value", () => {
        const input = [[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,null,8]]
        expect(checkNoMoreLegalMoves(input)).toBe(false)
    });

    test("returns true when passed a nested array where none of the values horizontally or vertically adjacent are equal", () => {
        const input = [
            [1,2,3,4],
            [5,6,7,8],
            [1,2,3,4],
            [5,6,7,8]
        ]
        expect(checkNoMoreLegalMoves(input)).toBe(true)
    })

    test("returns false when a nested array has 2 values that are equal when they are adjacent to each other", () => {
        const input = [[1,2,3,4], [5,6,7,7], [1,2,3,4],[5,6,7,8]];
        expect(checkNoMoreLegalMoves(input)).toBe(false)
    })
})