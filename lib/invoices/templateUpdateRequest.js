// This class was generated on Tue, 05 Dec 2017 14:33:41 PST by version 0.1 of Braintree SDK Generator
// templateUpdateRequest.js
// @version 0.1
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring');
/**
 Updates a template, by ID. In the JSON request body, specify a complete `template` object. The update method does not support partial updates.
 **/

class TemplateUpdateRequest {

  constructor(templateId) {
    this.path = '/v1/invoicing/templates/{template_id}?';
    this.path = this.path.replace("{template_id}", querystring.escape(templateId));
    this.verb = 'PUT';
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

module.exports = {TemplateUpdateRequest: TemplateUpdateRequest};
