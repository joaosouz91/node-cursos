module.exports = function (app) {
    var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

    autoIncrement.initialize(mongoose.connection);

    var curso = Schema({
        id: { type: Number, default: 0, unique: true },
        descricao: { type: String, required: true },
        cargaHoraria: { type: String, required: true},
        categoria: { type: String, required: true}
    });

    curso.plugin(autoIncrement.plugin, {
        model: 'curso',
        field: 'id',
        startAt: 1,
        incrementBy: 1
    });

    return mongoose.model('cursos', curso);
};