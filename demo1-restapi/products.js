var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'demo_rest'
});

var id = 0;

function nextId() {
    id++;
    return 'p' + id;
}

function Product(name, manufacturer, price) {
    this.id = nextId();
    this.name = name;
    this.manufacturer = manufacturer;
    this.price = price;
}
function query(){
    connection.connect();
    var promise = new Promise(function (resolve, reject) {
        connection.query('SELECT * FROM net_analyze', function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }
            console.log('--------------------------SELECT----------------------------');
            resolve(result);
            console.log(result);
            console.log('------------------------------------------------------------\n\n');  
        });
    });
    promise.then(function (value) {
        console.log(value);
        return value;
    }, function (value) {});
    return promise;
};
module.exports = {
    getProducts: () => {
        var producets = query();
        return producets;
    },

    getProduct: (id) => {
        var i;
        for (i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                return products[i];
            }
        }
        return null;
    },

    createProduct: (name, manufacturer, price) => {
        var p = new Product(name, manufacturer, price);
        products.push(p);
        return p;
    },

    deleteProduct: (id) => {
        var
            index = -1,
            i;
        for (i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            // remove products[index]:
            return products.splice(index, 1)[0];
        }
        return null;
    }
};
