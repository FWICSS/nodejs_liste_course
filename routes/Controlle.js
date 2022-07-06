const express = require('express');
const con = require("../config/bdConfig");
const router = express.Router();


router.get('/liste/:pseudo/voir',function (req,res/*,Routes*/){
    res.setHeader('Content-type','application/json');
    req.params.pseudo;
    var sql = "SELECT * FROM liste WHERE proprietaire = '" + req.params.pseudo +"';";
    con.query(sql, function (err, result) {
        if (err) throw err;
        // traitement du resultat
        res.write(JSON.stringify(result));
        res.end();
    });
})
router.get('/liste',function (req,res/*,Routes*/){
    res.setHeader('Content-type','application/json');
    req.params.pseudo;
    var sql = "SELECT * FROM liste;";
    con.query(sql, function (err, result) {
        if (err) throw err;
        // traitement du resultat
        res.write(JSON.stringify(result));
        res.end();
    });
})
router.get('/liste/:pseudo/ajouter/:produit',function (req,res){
    res.setHeader('Content-type','application/json');
        var sql = "INSERT INTO liste(intitulé,nombre,etat,proprietaire) " +
            "VALUES ('"+ req.params.produit +"',1,0,'"+req.params.pseudo+"');";

    con.query(sql, function (err, result) {
        if (err) throw err;
        // traitement du resultat
        res.write(JSON.stringify("ajout de '"+req.params.produit+"' a la liste"));
        res.end();
    });
})
router.delete('/liste/:pseudo/supprimer/:produit',function (req,res){
    res.setHeader('Content-type','application/json');
    var sql = "DELETE FROM liste WHERE intitulé = '"+req.params.produit+"' AND proprietaire = '"+req.params.pseudo+"';";

    con.query(sql, function (err, result) {
        if (err) throw err;
        // traitement du resultat
        res.write(JSON.stringify("Supression de '"+req.params.produit+"' de la liste"));
        res.end();
    });
})
router.put('/liste/:pseudo/cocher/:produit',function (req,res){
    res.setHeader('Content-type','application/json');
    var sql = "UPDATE liste SET etat='1' WHERE intitulé = '"+req.params.produit+"' AND proprietaire = '"+req.params.pseudo+"';";

    con.query(sql, function (err, result) {
        if (err) throw err;
        // traitement du resultat
        res.write(JSON.stringify("'"+req.params.produit+"' cocher pour '"+req.params.pseudo+" "));
        res.end();
    });
})
router.put('/liste/:pseudo/decocher/:produit',function (req,res){
    res.setHeader('Content-type','application/json');
    var sql = "UPDATE liste SET etat='0' WHERE intitulé = '"+req.params.produit+"' AND proprietaire = '"+req.params.pseudo+"';";

    con.query(sql, function (err, result) {
        if (err) throw err;
        // traitement du resultat
        res.write(JSON.stringify("'"+req.params.produit+"' décocher pour '"+req.params.pseudo+" "));
        res.end();
    });
})



module.exports = router;