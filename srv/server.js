const cds = require('@sap/cds');
const path = require('path');
const express = require('express');

cds.on('bootstrap', (app) => {
    
    app.get('/react-ui/index.html', (req, res) => {
        res.redirect(301, '/react-ui/');
    });

    const uiDir = path.join(__dirname, '../app/react-ui');
    
    app.use('/react-ui', express.static(uiDir));

});

module.exports = cds.server;