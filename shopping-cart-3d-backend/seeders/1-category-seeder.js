'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('categories', [
      {
        id:1,
        name:'Architectures',
        icon:'/image/ArchitectureCatIcon.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:2,
        name:'Characters',
        icon:'/image/CharacterCatIcon.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        name:'Vehicles',
        icon:'/image/VehicleCatIcon.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:4,
        name:'Animals',
        icon:'/image/AnimalCatIcon.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:5,
        name:'Weapons',
        icon:'/image/WeaponCatIcon.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:6,
        name:'Furnitures',
        icon:'/image/FurnitureCatIcon.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:7,
        name:'Foods',
        icon:'/image/FoodCatIcon.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:8,
        name:'Plants',
        icon:'/image/PlantCatIcon.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:9,
        name:'Electronics',
        icon:'/image/ElectronicCatIcon.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

};
