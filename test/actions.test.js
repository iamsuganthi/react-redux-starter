import {increment, decrement} from '../src/actions/actions';

describe("Actions", () => {
    it("creates action of type increment", () => {
        expect(increment()).toEqual({type: 'INCREMENT'})
    });

    it("creates action of type decrement", () => {
        expect(decrement()).toEqual({type: 'DECREMENT'})
    });
});