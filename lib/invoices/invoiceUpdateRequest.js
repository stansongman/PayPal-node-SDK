// This class was generated on Tue, 05 Dec 2017 14:33:39 PST by version 0.1 of Braintree SDK Generator
// invoiceUpdateRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Fully updates an invoice, by ID. In the JSON request body, include a complete `invoice` object. This call does not support partial updates.
 **/

class InvoiceUpdateRequest {

  constructor(invoiceId) {
    this.path = '/v1/invoicing/invoices/{invoice_id}?';
    this.path = this.path.replace("{invoice_id}", querystring.escape(invoiceId));
    this.verb = 'PUT';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }

  notifyMerchant(notifyMerchant) {
    let params = querystring.escape(notifyMerchant);
    this.path += 'notify_merchant=' + params + '&';
    return this;
  }

  requestBody(body) {
    this.body = body;
    return this;
  }
}

module.exports = {InvoiceUpdateRequest: InvoiceUpdateRequest};
