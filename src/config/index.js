const fromEmail = 'noreply.daybyday@gmail.com';
const emailPassword = 'Daybydaypass1$';
const emailHost = 'smtp.gmail.com';

const config = {
  mailNotifier: {
    username: fromEmail,
    password: emailPassword,
    host: emailHost,
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false },
  },
  emailjs: {
    user: fromEmail,
    password: emailPassword,
    host: emailHost,
    ssl: true,
  },
  mongo: 'mongodb://localhost',
  secret: 'some secret here',
};

export default config;
