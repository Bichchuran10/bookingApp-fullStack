// const mysql=require('mysql2');

// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'bookingApp',
//     password: 'Maina12345'
// })

// module.exports=pool.promise();

const Sequelize=require('sequelize');

const sequelize=new Sequelize('bookings','root','Maina12345',{
    dialect: 'mysql',
    host:'localhost'
})

module.exports=sequelize;