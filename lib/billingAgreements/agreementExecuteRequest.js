// This class was generated on Wed, 06 Dec 2017 14:18:28 PST by version 0.1 of Braintree SDK Generator
// agreementExecuteRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Executes a billing agreement, by ID, after customer approval.
 **/

class AgreementExecuteRequest {

  constructor(paymentToken) {
    this.path = '/v1/payments/billing-agreements/{payment_token}/agreement-execute?';
    this.path = this.path.replace("{payment_token}", querystring.escape(paymentToken));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
}

module.exports = {AgreementExecuteRequest: AgreementExecuteRequest};
