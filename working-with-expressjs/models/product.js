// const path = require('path');
// const fs = require('fs');
// const Cart = require('./cart');
// const product = []
const db = require('../utils/database')
//path for file where we fetch or store data
// const p = path.join(__dirname,
//     '../',
//     'data',
//     'product.json');

//helper function for fetching data storing data into files 

// const getProductFromFile = (cb) => {

//     fs.readFile(p, (err, fileContent) => {
//         if (err) {
//              cb([])
//         }
//         else {
//             cb(JSON.parse(fileContent))
//         }
//     })

// }

module.exports = class Product {
    constructor(id , title, price, description, imageUrl) {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
        // this.id = Math.random().toString();
        // console.log(t)
    }

    save() {
        // product.push(this)
        // console.log(product)

        // const p = path.join(__dirname,
        //     '../',
        //     'data',
        //     'product.json');
        // fs.readFile(p, (err, fileContent) => {
        //     let products = [];
        //     if (!err) {
        //         products = JSON.parse(fileContent);
        //     }
        //     products.push(this);
        //     fs.writeFile(p , JSON.stringify(products) , err => {
        //      console.log(err)
        //     })
        // })

                                //after adding helper function 



        //  getProductFromFile(product => {
        //     if(this.id){
        //         const existingProductIndex = product.findIndex(prod => prod.id === this.id);
        //         let updatedProduct = [...product]
        //         updatedProduct[existingProductIndex] = this 
        //         fs.writeFile(p , JSON.stringify(updatedProduct) , err=>{
        //             console.log(err)
        //         })
        //     }else{
        //         this.id = Math.random().toString();
        //         product.push(this);
        //         fs.writeFile(p , JSON.stringify(product) , err=>{
        //             console.log(err)
        //         })
        //     }    
        //     })
                        // after database 
        return db.execute("INSERT INTO product (title, price , description , imageUrl) VALUES (?,?,?,?)",
            [this.title,  this.price  , this.description , this.imageUrl]
        )   
    }

    static fetchAll() {
    // static fetchAll(cb) {
        // return product;
        // getProductFromFile(cb);

                    //after adding database

            return db.execute("SELECT * FROM product")
    }

    // static findById(id , cb){
    //     getProductFromFile(products => {
    //         const product = products.find(prod => prod.id === id)   
    //         cb(product)
    //     });
    // }

    static findById(id){
        return db.execute("SELECT * FROM product WHERE  product.id = ?",[id])
    }


    static deleteById(id){
        // getProductFromFile(products => {
        //     const product = products.find( prod => prod.id === id);
        //     const updatedProduct = products.filter(prod => prod.id !== id);
        //     fs.writeFile(p , JSON.stringify(updatedProduct) , err => {
        //         if(!err){
        //             Cart.deleteProduct(id , product.price);
        //         }

        //     })
        // })
    }
}
