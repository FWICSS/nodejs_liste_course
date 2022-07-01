const express = require('express');
const con = require("../config/bdConfig");
const router = express.Router();


router.get('/liste/:pseudo/voir',function (req,res/*,Routes*/){
    res.setHeader('Content-type','application/json');
    req.params.pseudo;
    var sql = "SELECT * FROM liste WHERE propriétaire = '" + req.params.pseudo +"';";
    con.query(sql, function (err, result) {
        if (err) throw err;
        // traitement du resultat
        res.write(JSON.stringify(result));
        res.end();
    });
})
router.get('/liste/:pseudo/ajouter/:produit',function (req,res){
    res.setHeader('Content-type','application/json');
    /*
    if(router.get() === '/liste/:pseudo/ajouter/:produit/:nombres' ){
        var sql = "INSERT INTO liste(intitulé,nombre,etat,propriétaire) " +
            "VALUES ('"+ req.params.produit +"','"+req.params.nombres+"',0,'"+req.params.pseudo+"');";
    }else {
        */
        var sql = "INSERT INTO liste(intitulé,nombre,etat,propriétaire) " +
            "VALUES ('"+ req.params.produit +"',1,0,'"+req.params.pseudo+"');";
    //}
    con.query(sql, function (err, result) {
        if (err) throw err;
        // traitement du resultat
        res.write(JSON.stringify("ajout de '"+req.params.produit+"' a la liste"));
        res.end();
    });
})
router.get('/liste/:pseudo/supprimer/:produit',function (req,res){
    res.setHeader('Content-type','application/json');
    var sql = "DELETE FROM liste WHERE intitulé = '"+req.params.produit+"' AND propriétaire = '"+req.params.pseudo+"';";

    con.query(sql, function (err, result) {
        if (err) throw err;
        // traitement du resultat
        res.write(JSON.stringify("Supression de '"+req.params.produit+"' de la liste"));
        res.end();
    });
})


module.exports = router;