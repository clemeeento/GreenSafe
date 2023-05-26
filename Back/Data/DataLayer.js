const fs = require("fs");
const jwt = require('jsonwebtoken');

const fichier = "./Data/Users.json";

let dataLayer = {

    getUsers : function (){
        const users = fs.readFileSync(fichier);
        const tableau = JSON.parse(users);
        return tableau;
    },

    addCustomers : function(newCustomer){
        // Lit le fichier JSON et ajoute à un client
        let data = fs.readFileSync(fichier, "utf-8");
        let added = JSON.parse(data);
        added.push(newCustomer);
        // Enregistre le fichier JSON
        fs.writeFileSync(fichier, JSON.stringify(added), (error) => {
            if(error) throw error;
        });
    },

    connexion : function(email, password){
        let tableau = JSON.parse(fs.readFileSync(fichier, "utf-8"));

        const user = tableau.find(c => c.email == email);

        if (user && user.password === password) {
            // Mot de passe correct, l'utilisateur est authentifié
            return true;
        }
        
        // Email ou mot de passe incorrect
        return false;
    },

    updateCustomers : function(email,quizNumber){
        // Lit le fichier JSON et ajoute à un client
        
        let tableau = JSON.parse(fs.readFileSync(fichier, "utf-8"));
        const user = tableau.find(c => c.email == email);
        
        if (user) {
            // Mettez à jour le tableau cours avec le résultat du quiz
            user.cours[quizNumber-1] = 1; // Par exemple, marquez le quiz comme réussi en attribuant la valeur 1
            // Mettez à jour le JSON ou la base de données avec les modifications
            fs.writeFileSync(fichier, JSON.stringify(tableau), (error) => {
                if(error) throw error;
            });
          } 
        else {
            console.log("fail");
        }
    },
};

module.exports =dataLayer;
