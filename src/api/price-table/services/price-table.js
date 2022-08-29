'use strict';

/**
 * price-table service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::price-table.price-table');
