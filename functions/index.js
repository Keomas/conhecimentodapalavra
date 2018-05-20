'use strict';
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);



exports.enviarEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    let remetente = '"Teste" <email@gmail.com>';

    let assunto = req.body['assunto'];
    let destinatarios = req.body['dest']; // lista de e-mails destinatarios separados por ,
    let corpo = req.body['msg'];
    

    let email = {
        from: remetente,
        to: destinatarios,
        subject: assunto,
        text: corpo,
        
    };

    mailTransport.sendMail(email, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Mensagem %s enviada: %s', info.messageId, info.response);
    });
  });
});