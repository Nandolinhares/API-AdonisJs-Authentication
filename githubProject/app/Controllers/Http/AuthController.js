'use strict'

const User = use('App/Models/User');

class AuthController {
    async register({ request }) {
        const data = request.only(['username','email', 'password']);
        const email = data.email;

        const user = await User.create(data);

        user.password = undefined;

        return user;
    }

    async authenticate({ request, auth }) {
        const { email, password } = request.all();

        const token = await auth.attempt(email, password);

        return token;
    }
}


module.exports = AuthController
