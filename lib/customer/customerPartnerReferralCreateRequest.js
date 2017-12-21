'use strict';

const querystring = require('querystring');
/**
 Subscribes your webhook listener to events.
 **/

class CustomerPartnerReferralCreateRequest {

  constructor() {
    this.path = '/v1/customer/partner-referrals';
    this.verb = 'POST';
    this.body = null;
    this.headers = {
        'Content-Type': 'application/json'
        };
  }
  requestBody(body) {
    this.body = body;
    return this;
  }
}

module.exports = {CustomerPartnerReferralCreateRequest: CustomerPartnerReferralCreateRequest};