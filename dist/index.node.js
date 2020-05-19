'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.WebSocket = exports.RTCPeerConnection = exports.Hmac = exports.Hash = exports.fetch = exports.randomBytes = exports.createHmac = exports.createHash = exports.getHashes = void 0;
const tslib_1 = require('tslib');
const node_fetch_1 = tslib_1.__importDefault(require('node-fetch'));
exports.fetch = node_fetch_1.default;
const ws_1 = tslib_1.__importDefault(require('ws'));
exports.WebSocket = ws_1.default;
const crypto_1 = require('crypto');
Object.defineProperty(exports, 'Hash', {
    enumerable: true,
    get: function () {
        return crypto_1.Hash;
    },
});
Object.defineProperty(exports, 'Hmac', {
    enumerable: true,
    get: function () {
        return crypto_1.Hmac;
    },
});
const ianaNames = new Map([
    ['md2', 'md2'],
    ['md5', 'md5'],
    ['sha-1', 'sha1'],
    ['sha-224', 'sha224'],
    ['sha-256', 'sha256'],
    ['sha-384', 'sha384'],
    ['sha-512', 'sha512'],
]);
function getHashes() {
    return ['sha-1', 'sha-256', 'sha-384', 'sha-512', 'md5'];
}
exports.getHashes = getHashes;
function createHash(alg) {
    return crypto_1.createHash(ianaNames.get(alg.toLowerCase()) || alg);
}
exports.createHash = createHash;
function createHmac(alg, key) {
    return crypto_1.createHmac(ianaNames.get(alg.toLowerCase()) || alg, key);
}
exports.createHmac = createHmac;
function randomBytes(size) {
    return crypto_1.randomBytes(size);
}
exports.randomBytes = randomBytes;
const nativeRTCPeerConnection = undefined;
exports.RTCPeerConnection = nativeRTCPeerConnection;
