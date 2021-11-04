
'use strict';
var dbConn = require('./../../config/db.config');
//Paitenttable object create
var Paitenttable = function(paitenttable){
  this.first_name            = paitenttable.first_name;
  this.last_name             = paitenttable.last_name;
  this.middlename            = paitenttable.middle_name;
  this.canlogin              =paitenttable.canlogin;
  this.email                 = paitenttable.email;
  this.countrycode           = paitenttable.countrycode;
  this.contactnoprimary      = paitenttable.contactnoprimary;
  this.contactnosecondary    = paitenttable.contactnosecondary;
  this.addedby               = paitenttable.addedby;
  this.gender                = paitenttable.gender;
  this.dob                   = paitenttable.dob;
  this.areaname              = paitenttable.areaname;
  this.stateid               = paitenttable.stateid;
  this.cityid                = paitenttable.cityid;
  this.areaid                = paitenttable.areaid;
  this.streetadress1         = paitenttable.streetadress1;
  this.streetadress2         = paitenttable.streetadress2;
  this.homeno                = paitenttable.homeno;
  this.created_at            = new Date();
  this.updated_at            = new Date();
};
paitenttable .create = function (newEmp, result) {
dbConn.query("INSERT INTO paitenttable set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
paitenttable.findById = function (id, result) {
dbConn.query("Select * from paitenttable where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
paitenttable.findAll = function (result) {
dbConn.query("Select * from paitenttable", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('paitenttable : ', res);
  result(null, res);
}
});
};
paitenttable.update = function(id, employee, result){
dbConn.query("UPDATE paitenttable SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [paitenttable.first_name,paitenttable.last_name,paitenttable.email,paitenttable.phone,paitenttable.organization,paitenttable.designation,paitenttable.salary, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
paitenttable.delete = function(id, result){
dbConn.query("DELETE FROM paitenttable WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= paitenttable;