/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let resultantValue = init;
    return {
        increment: function () {
            resultantValue++
            return resultantValue
        },
        decrement: function () {
            resultantValue--
            return resultantValue
        },
        reset: function () {
            resultantValue = init
            return resultantValue

        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */