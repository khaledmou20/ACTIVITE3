// Nous définissons ici les paramètres du serveur.
// Les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 
 
// Créer un objet de type Express. 
var app = express(); 
 
//Créer un objet Router pour implémenter les méthodes. 
var monRoute = express.Router(); 
  
monRoute.route('/authors')
.delete(function(req,res){ 
    res.send({message : "Suppression d'un auteur dans la liste"+ req.params.id});  
}); 
// Utiliser le routeur
app.use(monRoute);  
 
// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Serveur fonctionne sur http://"+ hostname +":"+port); 
});  