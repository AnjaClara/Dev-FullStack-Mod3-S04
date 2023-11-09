'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('products', { 
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      description: Sequelize.STRING,
        
      price: {
        type: Sequelize.NUMERIC(2),
        allowNull: false
      },

      logoUrl: Sequelize.STRING,

      category: Sequelize.STRING,

      created_at: {
        type:Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type:Sequelize.DATE,
        allowNull: false
      },
      deleted_at: {
        type:Sequelize.DATE,
      }
    });
     
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('users');
     
  }
};
