// Base routes for default index/root path, about page, 404 error pages, and others..


exports.register = function(server, options, next){
    const Wreck = require('wreck');


    server.route([
        {
            method: 'GET',
            path: '/about',
            config: {
                handler: function(request, reply){
                    reply.view('about', {
                        title: 'Super Informative About Page'
                    });
                },
                id: 'about'
            }
        },
        {
            method: 'GET',
            path: '/',
            config: {
                handler: function(request, reply){
                  // Render the view with the custom greeting
                    reply.view('index', {
                        title: 'Awesome Boilerplate Homepage'
                    });
                },
                id: 'index'
            }
        },
        {
            method: 'GET',
            path: '/lottoreport',
            config: {
                handler: function(request, reply){
                    Wreck.get("http://www.lottoreport.com/", function(err, res, payload) {
                        console.log(res);
                    });
                },
                id: 'lottoreport'
            }
        },
        {
            method: 'GET',
            path: '/{path*}',
            config: {
                handler: function(request, reply){
                    reply.view('404', {
                        title: 'Total Bummer 404 Page'
                    }).code(404);
                },
                id: '404'
            }
        }
    ]);

    next();
}

exports.register.attributes = {
    name: 'base'
};