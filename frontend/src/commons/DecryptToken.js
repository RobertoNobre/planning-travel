import jwt from 'jsonwebtoken';

export default () => jwt.decode(localStorage.getItem('id_token'), []);

