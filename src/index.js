const express = require('express');
const app = express();
const port = 3000;
const nodemailer = require('nodemailer');

const smtp = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "bugtrakers@gmail.com",
        pass: "fxaa avww tpqd jayw"
    }
});

const configEmail = {
    from: "bugtrakers@gmail.com",
    to: "brunocoelho66@gmail.com",
    subject: "Teste de envio de emails",
    html: "<p>Email recebido com sucesso.</p>"
};

new Promise((resolve, reject) => {
    smtp.sendMail(configEmail, (error, info) => {
        if (error) {
            console.log(error);
            smtp.close();
            return reject(error);
        } else {
            console.log('Email enviado: ' + info.response);
            smtp.close();
            return resolve(info);
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


//senha de app do gmail:
//fxaa avww tpqd jayw
