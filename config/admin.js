module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '49995b0d5f1f56077d0b6682829d867b'),
  },
});
