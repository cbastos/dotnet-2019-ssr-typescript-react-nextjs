// This code doesn't works, is only an example to show how works nextjs.
const createExpressServer = require('express');
const { Server } = require('http');
const { renderToString } = require('react-dom/server');
const BicycleCard = require('./components/Bicycles/BicycleCard/BicycleCard');

const server = createExpressServer();
const http = Server(server);

server.get('/bicyclecard', (req, res) => {
    const ssrHtml = renderToString(BicycleCard);
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Shop-bre ruedas nativa</title>
    </head>
    <body>
        <div id="root">${ssrHtml}</div>
        <script>
            ReactDOM.hydrate(BicycleCard, document.getElementById('root'))
        </script>
    </body>
    </html>
`;
});


http.listen(port, () => console.log(`Listening on *:${port}`));