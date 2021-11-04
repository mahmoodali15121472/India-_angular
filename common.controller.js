'use strict';
const Patient = require('../models/patient.model');
exports.findAll = function(req, res) {
Patient.findAll(function(err, patient) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', patient);
  res.send(patient);
});
};
exports.create = function(req, res) {
const new_patient = new Patient(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Patient.create(new_patient, function(err, patient) {
  if (err)
  res.send(err);
  res.json({error:false,message:"patient added successfully!",data:patient});
});
}
};
exports.findById = function(req, res) {
Patient.findById(req.params.id, function(err, patient) {
  if (err)
  res.send(err);
  res.json(patient);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Patient.update(req.params.id, new Patient(req.body), function(err, patient) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'patient successfully updated' });
});
}
};
exports.delete = function(req, res) {
Patient.delete( req.params.id, function(err, patient) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'patient successfully deleted' });
});
};


'use strict';
const Doctor = require('../models/doctor.model');
exports.findAll = function(req, res) {
Doctor.findAll(function(err, doctor) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', doctor);
  res.send(doctor);
});
};
exports.create = function(req, res) {
const new_doctor = new Doctor(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Doctor.create(new_doctor, function(err, doctor) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Doctor added successfully!",data:doctor});
});
}
};
exports.findById = function(req, res) {
Doctor.findById(req.params.id, function(err, doctor) {
  if (err)
  res.send(err);
  res.json(doctor);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Doctor.update(req.params.id, new Doctor(req.body), function(err, doctor) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Doctor successfully updated' });
});
}
};
exports.delete = function(req, res) {
Doctor.delete( req.params.id, function(err, doctor) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Doctor successfully deleted' });
});
};


'use strict';
const Hcfadmin = require('../models/hcfadmin.model');
exports.findAll = function(req, res) {
Hcfadmin.findAll(function(err, hcfadmin) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', hcfadmin);
  res.send(hcfadmin);
});
};
exports.create = function(req, res) {
const new_hcfadmin = new Hcfadmin(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Hcfadmin.create(new_hcfadmin, function(err, hcfadmin) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Hcfadmin added successfully!",data:hcfadmin});
});
}
};
exports.findById = function(req, res) {
Hcfadmin.findById(req.params.id, function(err, hcfadmin) {
  if (err)
  res.send(err);
  res.json(hcfadmin);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Hcfadmin.update(req.params.id, new Hcfadmin(req.body), function(err, hcfadmin) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Hcfadmin successfully updated' });
});
}
};
exports.delete = function(req, res) {
Hcfadmin.delete( req.params.id, function(err, hcfadmin) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Hcfadmin successfully deleted' });
});
};




'use strict';
const Employee = require('../models/employee.model');
exports.findAll = function(req, res) {
Employee.findAll(function(err, employee) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', employee);
  res.send(employee);
});
};
exports.create = function(req, res) {
const new_employee = new Employee(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Employee.create(new_employee, function(err, employee) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Employee added successfully!",data:employee});
});
}
};
exports.findById = function(req, res) {
Employee.findById(req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json(employee);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Employee.update(req.params.id, new Employee(req.body), function(err, employee) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Employee successfully updated' });
});
}
};
exports.delete = function(req, res) {
Employee.delete( req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Employee successfully deleted' });
});
};