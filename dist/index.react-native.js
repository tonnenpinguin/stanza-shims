'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.randomBytes = void 0;
const tslib_1 = require('tslib');
const Random = tslib_1.__importStar(require('expo-random'));
tslib_1.__exportStar(require('./index.browser'), exports);
const RANDOM_NUMBER_SIZE = 128;
let randomNumber;
const getAndUpdate = (size) => {
    const startIdx = Math.round((RANDOM_NUMBER_SIZE - size - 1) * Math.random());
    const endIdx = startIdx + size;
    const number = randomNumber?.subarray(startIdx, endIdx);
    Random.getRandomBytesAsync(RANDOM_NUMBER_SIZE).then((val) => (randomNumber = val));
    return number;
};
getAndUpdate(1);
function randomBytes(size) {
    return Buffer.from(getAndUpdate(size));
}
exports.randomBytes = randomBytes;
