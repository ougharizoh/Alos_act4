const express = require('express')
const implement = require('./routes/implementation')
var app = express()
const authToken = require('./authenticate/authenticateToken');
var totoro = require('totoro-node');


app.use(express.json())

app.use("/auth", require("./authenticate/authentication"));

app.use('/',authToken, totoro.rain({

    "1.0.0": {
        active: true,
        deprecated: false,
        endpoints: [
            {
                route: "/",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.accueil
            },
            

            {
                route: "/data",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_liste
            },
            {
                route: "/hopitals",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_liste
            },

            {
                route: "/hopitals/:name",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_liste_id
            },

            {
                route: "/hopitals
                method: "POST",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_ajout
            },

            {
                route: "/hopitals/:rank",
                method: "PUT",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_modif
            },

            {
                route: "/hopitals/:rank",
                method: "DELETE",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_supr
            },

            {
                route: "*",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_all
            }
        ]
    }
    ,
    "2.0.0": {
        endpoints: [
            {
                route: "/",
                method: "GET",
                implementation: implement.accueil_v2
            },

            {
                route: "/data",
                method: "GET",
                implementation: implement.data_liste
            },
            {
                route: "/hopitals",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_liste
            },
            {
                route: "/hopitals/:rank",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_liste_id
            },

            {
                route: "/hopitals",
                method: "POST",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_ajout
            },

            {
                route: "/hopitals/:rank",
                method: "PUT",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_modif
            },

            {
                route: "/hopitals/:rank",
                method: "DELETE",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_supr
            },

            {
                route: "*",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: implement.hopitals_all
            }
        ]
    }
}));


 
app.listen(3000, () => {
    console.log("Serveur à l'écoute")
})

module.exports = app;
