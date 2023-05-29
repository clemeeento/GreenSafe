const dataL = require("../Data/DataLayer");

const business = {
    
    getCustomers : function () {
        return dataL.getUsers();
    },

    addCustomers : function(customer){
        return dataL.addCustomers(customer);
    },

    connexion : function(email, password){
        return dataL.connexion(email, password)
    },

    updateCustomers :function (email,quizNumber){
        return dataL.updateCustomers(email,quizNumber);
    },

    getCours : function(email){
        return dataL.getCours(email);
    }

};

module.exports = business;