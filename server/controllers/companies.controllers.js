const Company = require('../models/companies.model');

module.exports.createCompany = (req, res) => {
    console.log(req.body.company);
    Company.create(req.body.company)   
        .then(newCompany => res.json({ newCompany, _id: newCompany._id }))
        .catch(err => res.status(500).json({ error: err.errors, msg: 'Ups no hemos podido crear una nueva empresa' }));
}

module.exports.getAllCompanies = (req, res) => {
    Company.find()
        .then(companies => res.json({ companies }))
        .catch(err => res.status(500).json({ error: err, msg: 'Ups no hemos podido traerte las empresas' }));
}

module.exports.getOneCompany = (req, res) => {
    Company.findById(req.params.id)
        .then(company => res.json({ company }))
        .catch(err => res.status(404).json({ error: err, msg: 'Ups no hemos podido traerte la empresa' }));
}

module.exports.updateCompany = (req, res) => {
    console.log(req.body.company)
    Company.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedCompany => res.json({ updatedCompany }))
        .catch(err => res.status(500).json({ msg: 'Ups no hemos podido actualizar la empresa', error: err }));
}

module.exports.deleteCompany = (req, res) => {
    Company.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json({ deleteConfirmation }))
        .catch(err => res.status(500).json({ msg: 'Ups no hemos podido borrar la empresa', error: err }));
}

module.exports.addProductCompany = (req, res) => {

    Company.findByIdAndUpdate(req.params.id,{
        $push:{ products: req.body.products }
     },
      { new: true })
        .then(company => res.json({ company }))
        .catch(err => res.status(500).json({ msg: 'Ups no hemos podido agregar un producto a la Empresa', error: err }));
}
