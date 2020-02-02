'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('sub_categories', [
      {
        id:1,
        name:'House',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:1
      },
      {
        id:2,
        name:'Town',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:1
      },
      {
        id:3,
        name:'Medieval',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:1
      },
      {
        id:4,
        name:'Bridge',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:1
      },
      {
        id:5,
        name:'Room',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:1
      },
      {
        id:6,
        name:'Male',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:2
      },
      {
        id:7,
        name:'Female',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:2
      },
      {
        id:8,
        name:'Creature',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:2
      },
      {
        id:9,
        name:'Car',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:3
      },
      {
        id:10,
        name:'Bike',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:3
      },
      {
        id:11,
        name:'Bus',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:3
      },
      {
        id:12,
        name:'Ship',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:3
      },
      {
        id:13,
        name:'Tank',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:3
      },
      {
        id:14,
        name:'Quadruped',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:4
      },
      {
        id:15,
        name:'Aquatic',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:4
      },
      {
        id:16,
        name:'Poultry',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:4
      },
      {
        id:17,
        name:'Melee',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:5
      },
      {
        id:18,
        name:'Gun',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:5
      },
      {
        id:19,
        name:'Arrow',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:5
      },
      {
        id:20,
        name:'Throwing',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:5
      },
      {
        id:21,
        name:'Bed',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:6
      },
      {
        id:22,
        name:'Table',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:6
      },
      {
        id:23,
        name:'Sofa',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:6
      },
      {
        id:24,
        name:'Lamp',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:6
      },
      {
        id:25,
        name:'Chair',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:6
      },
      {
        id:26,
        name:'Meat',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:7
      },
      {
        id:27,
        name:'Sweets',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:7
      },
      {
        id:28,
        name:'Ingredients',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:7
      },
      {
        id:29,
        name:'Food',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:7
      },
      {
        id:30,
        name:'Tree',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:8
      },
      {
        id:31,
        name:'Flower',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:8
      },
      {
        id:32,
        name:'Plant',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:8
      },
      {
        id:33,
        name:'Camera',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:9
      },
      {
        id:34,
        name:'Computer',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:9
      },
      {
        id:35,
        name:'Robot',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:9
      },
      {
        id:36,
        name:'Mobile',
        createdAt: new Date(),
        updatedAt: new Date(),
        category_id:9
      },
    ], {});
  },

};
