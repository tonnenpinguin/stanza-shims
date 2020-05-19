import * as Random from 'expo-random';

export * from './index.browser';

const RANDOM_NUMBER_SIZE = 128;
let randomNumber: Uint8Array | undefined;

const getAndUpdate = (size: number) => {
    const startIdx = Math.round((RANDOM_NUMBER_SIZE - size - 1) * Math.random());
    const endIdx = startIdx + size;
    const number = randomNumber?.subarray(startIdx, endIdx);
    Random.getRandomBytesAsync(RANDOM_NUMBER_SIZE).then((val) => (randomNumber = val));

    return number;
};

getAndUpdate(1);

export function randomBytes(size: number) {
    return Buffer.from(getAndUpdate(size)!);
}
