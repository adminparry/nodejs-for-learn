var orm = require('orm');

orm.connect("mysql://root:root@127.0.0.1/zw", function (err, db) {
	if (err) throw err;

	var Person = db.define("t_areainfo", {
        level      : Number,
        name   : String,
        parentId       : Number, // FLOAT 
        status      : Number
        
    }, {
        methods: {
            fullName: function () {
                return this.name + ' ' + this.surname;
            }
        }
    });
})