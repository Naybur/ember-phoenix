/* eslint-env node */
'use strict';

module.exports = {
  name: 'phoenix',

  included: function(app) {
    this._super.included(app);
    app.import('vendor/phoenix-stub.js');
  }
};
