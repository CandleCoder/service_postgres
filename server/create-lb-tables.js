var server = require('./server');
var ds = server.dataSources.postgresDS;
var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
ds.automigrate(lbTables, (er) => {
  if (er) throw er;
  ds.disconnect();
});
