import reducer from '../src/reducers/reducers';

describe("Reducer", () => {
    it("increments the current state by 1", () => {
        const incrementedValue = reducer(3, {type: "INCREMENT"});
        expect(incrementedValue).toEqual(4);
    });

    it("decrements the current state by 1", () => {
        const incrementedValue = reducer(3, {type: "DECREMENT"});
        expect(incrementedValue).toEqual(2);
    });

    it("returns current value of state when action type is not supported", () => {
        const incrementedValue = reducer(3, {type: "RANDOM"});
        expect(incrementedValue).toEqual(3);
    });
});