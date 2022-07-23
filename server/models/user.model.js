const bcrypt = require('bcrypt')

const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Debe ingrear nombre'],
        minlength: [3, 'Debe tener por lo menos 3 caracteres'],
    },
    email: {
        type: String,
        unique: [true, 'Este correo ya se encuentra registrado'],
        required: [true, 'Debe ingresar email'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Ingresa un email válido"
        }
    },
    password: {
        type: String,
        required: [true, 'Debe tener una contraseña'],
        minlength: [3, 'Debe tener por lo menos 3 caracteres'],
    },
    company : {type: Schema.Types.ObjectId,ref:'EasyHTMLCompany'}
    
}, { timestamps: true });

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Las contraseñas deben coincidir');
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = model('User', UserSchema);

module.exports = User;