'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('formats', [
      {
        file_format:'.ma',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:1
      },
      {
        file_format:'.max',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:1
      },
      {
        file_format:'.obj',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:1
      },
      {
        file_format:'.obj',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:2
      },
      {
        file_format:'.fbx',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:2
      },
      {
        file_format:'.ma',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:3
      },
      {
        file_format:'.obj',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:3
      },
      {
        file_format:'.mtl',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:3
      },
      {
        file_format:'.ma',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:4
      },
      {
        file_format:'.ma',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:5
      },
      {
        file_format:'.obj',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:5
      },
      {
        file_format:'.fbx',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:6
      },
      {
        file_format:'.mtl',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:6
      },
      {
        file_format:'.ma',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:7
      },
      {
        file_format:'.max',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:7
      },
      {
        file_format:'.obj',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:7
      },
      {
        file_format:'.fbx',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:7
      },
      {
        file_format:'.mtl',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:7
      },
      {
        file_format:'.ma',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:8
      },
      {
        file_format:'.mtl',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:8
      },
      {
        file_format:'.obj',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:8
      },
      {
        file_format:'.blend',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:9
      },
      {
        file_format:'.mtl',
        createdAt: new Date(),
        updatedAt: new Date(),
        product_id:9
      },
    ], {});
  },

};
