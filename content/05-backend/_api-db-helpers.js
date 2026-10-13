// Code có sẵn cho ví dụ của bài "API + Database": mini-Express + SQLite với dữ liệu cửa hàng.
const apiHelpers = require('./_api-helpers.js');
module.exports = () => apiHelpers({ seed: require('./_shop-seed.js') });
