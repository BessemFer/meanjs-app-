var movie = require('../models/Movie');
module.exports = function(app) {

    app.get('/api/setupbd', function(req, res) {

        // seed database
        var starterMovie = [
            {
                title: 'Transformers 1',
                url: 'https://www.youtube.com/watch?v=KrUhwet0ngg',
               
            },
            {
                title: 'Transformers 2',
                url: 'https://www.youtube.com/watch?v=uH3STHC63hU',
                
            },
            {
                title: 'Transformers 3',
                todo: 'https://www.youtube.com/watch?v=kHRf01Gjosk',
                
            }
        ];
        movie.create(starterMovie, function(err, results) {
            res.send(results);
        });
    });
}	