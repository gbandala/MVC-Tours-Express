var Tour = require('../models/tour');

//List Tours
exports.inq = function (req, res) {
    Tour.find(function (err, tour) {
        if (err) return console.log(err);
        res.send(tour);
        console.log("tours encontrados...");
    })
};

//Get Tour by ID
exports.inqId = (req, res) => {
    Tour.findById(req.params.id, (err, tour) => {
        if (err) return console.log(err);
        res.send(tour);
        console.log("tour encontrado:" + req.params.id);
    })
};

exports.inqById = function (req, res) {
    Tour.findById(req.params.id, function (err, tour) {
        if (err) return console.log(err);
        res.send(tour);
        console.log("tour encontrado:" + req.params.id);
    })
};

//Get Tour by name
exports.inqByName = (req, res) => {
    Tour.findOne({
        tourName: req.params.name
    }, (err, tour) => {
        if (err) return console.log(err);
        res.send(tour);
        console.log("tour encontrado: " + req.params.name);
    })
};

//POST a Tour
exports.add = (req, res) => {
    tour = new Tour({
        tourName: req.body.tourName,
        tourPackage: req.body.tourPackage,
        tourLength: req.body.tourLength,
        tourPrice: req.body.tourPrice,
        tourDifficulty: req.body.tourDifficulty
    })
    console.log(tour);
    tour.save(function (err, tour) {
        if (err) return console.error(err);
        // console.log(tour.tourName + " insertado en la coleccion tours...");
        res.send(tour.tourName + " insertado en la coleccion tours...");
    });
}
// update a tour
exports.mod = (req, res) => {
    Tour.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, tour) => {
        if (err) return console.error(err);
        res.send('tour:' + req.params.id + ' actualizado..');
    });
}

// delete a tour
exports.del = (req, res) => {
    Tour.findByIdAndDelete(req.params.id, (err, tour) => {
        if (err) return console.error(err);
        res.send('tour:' + req.params.id + ' borrado..');
    })
}
