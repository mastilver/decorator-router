'use strict';
module.exports = function (patterns, stategy, ...params) {

    const stategyInstance = stategy(...params);

};
