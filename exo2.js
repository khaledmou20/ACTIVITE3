// Les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 
 
// Créer un objet de type Express. 
var app = express(); 
 
//Créer un objet Router pour implémenter les méthodes. 
var monRoute = express.Router(); 
  
monRoute.route('/authors')
.post(function(req,res){
    res.send({message : "Ajoute un auteur a la liste", 
    "INSPIRE_number":"INSPIRE_1245","affiliation":"Univ",
    "name":'{"first_name":"hammadi","last_name":"mahmoud"}',
    "title":"Mosta", methode : req.method});
})

.put(function(req,res){ 
    res.send({message : "Mise à jour des informations d'un auteur"+req.params.id});
})
// Utiliser le routeur
app.use(monRoute);  
 
// Démarrer le serveur
app.listen(port, hostname, function(){
	console.log("Serveur fonctionne sur http://"+ hostname +":"+port); 
});