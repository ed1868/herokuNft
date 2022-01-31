module.exports = ({ env }) => ({
  host: env('HOST', 'https://bamboomarketplace.herokuapp.com'),
  port: env.int('PORT', 'https://bamboomarketplace.herokuapp.com'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0cc210dc94052987b751e32861b0d58c'),
    },
  },
});
