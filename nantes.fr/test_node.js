var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyblab_tweens',
  database : 'tweens_hyblab'
});
connection.connect();
  var max_id = 'select max(id) from general_information';	
  var id_insert;
  connection.query( max_id, function(err, rows){
  		 id_insert=rows[0];
  });
  
  var post = {id: id_insert, sex: 1,age: 1, plus_etudier: 1, ecart_salair: 1,taux_activite: 1, plus_concerne: 1, dans_sociale: 1, plus_responsabilite: 1};
  var strQuery=connection.query('INSERT INTO general_information SET ?', post, function(err,result)
  {
  	if(err)	{
  		throw err;
  	}else{
  		console.log(strQuery.sql);
  	}
  });
  
  