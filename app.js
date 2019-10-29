const express= require('express');

var path= require('path');// to add pathls

const app = express();




app.use(express.static('public'));//to add css 


app.use(express.urlencoded({
    extended: true
  }));

app.set('views', path.join(__dirname, 'views'));// t add ejs
/* app.use(express.static(path.join(__dirname, '/public'))); */

app.set('view engine', 'ejs');// template ekler love.ejs yerine love yazarsin

app.get('/', function (req, res) {
    res.render('index');
});

//include/partials/header and footer koyduk post ejs ve digerlerine

app.get('/loving/:thing',function (req, res) {
    var thing= req.params.thing;
    res.render('love', {thingVar: thing});
} );

app.get('/posts', function (req, res) {
    var posts= [
        {title:'i love u', author:'mrt'},
        {title:'gone with the wind', author:'tusuba'},
        {title:'alles wird schön', author:'scope'},
    ]
    res.render('posts', {posts:posts})
})
app.get('/flowers', function (req, res) {
    var flowers= [
        {name:'rose', country:'belgium'}, 
        {name:'white rose', country:'holland'}, 
        {name:'red rose', country:'germany'}, 
    ];
  res.render('flowers', {flowers:flowers});
});


app.listen(8000, function () {
    console.log(`Express server started `);
})