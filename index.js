const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
// const fs = require('fs');

// Middleware
app.use(express.static(path.join(__dirname, 'public/bootstrap/css')));
app.use(express.static(path.join(__dirname, 'public/bootstrap/fonts')));
app.use(express.static(path.join(__dirname, 'public/bootstrap/js')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/font-awsome/css')));

app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/js/email')));
app.use(express.static(path.join(__dirname, 'public/js/handlebars')));
app.use(express.static(path.join(__dirname, 'public/js/main')));
app.use(express.static(path.join(__dirname, 'public/images/index')));
app.use(express.static(path.join(__dirname, 'public/images/about')));
app.use(express.static(path.join(__dirname, 'public/images/favicon')));
app.use(express.static(path.join(__dirname, 'public/images/carousel')));
app.use(express.static(path.join(__dirname, 'public/images/categories')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/landing-img')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/main-001')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/001')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/002')));
app.use(express.static(path.join(__dirname, 'public/images/cat-1/003')));
app.use(express.static(path.join(__dirname, 'public/images/cat-2/landing-img')));
app.use(express.static(path.join(__dirname, 'public/images/cat-2/main-001')));
app.use(express.static(path.join(__dirname, 'public/images/cat-2/001')));
app.use(express.static(path.join(__dirname, 'public/images/cat-2/002')));
app.use(express.static(path.join(__dirname, 'public/images/cat-2/003')));
app.use(express.static(path.join(__dirname, 'public/images/cat-3/landing-img')));
app.use(express.static(path.join(__dirname, 'public/images/cat-3/main-001')));
app.use(express.static(path.join(__dirname, 'public/images/cat-3/001')));
app.use(express.static(path.join(__dirname, 'public/images/cat-3/002')));
app.use(express.static(path.join(__dirname, 'public/images/cat-3/003')));







// Handlebars templates
app.engine('.hbs', exphbs({extname: 'hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

// Image 0bjects
const context = {
    cat1001: [
        {
            img: '002PA.jpg',
        },{
            img: '003PA.jpg',
        },{
            img: '004PA.jpg',
        },{
            img: '005PA.jpg',
        },{
            img: '006PA.jpg',
        },{
            img: '007PA.jpg',
        },{
            img: '008PA.jpg',
        },{
            img: '009PA.jpg',
        },{
            img: '010PA.jpg',
        },{
            img: '011PA.jpg',
        },{
            img: '012PA.jpg',
        },{
            img: '013PA.jpg',
        },{
            img: '014PA.jpg',
        },{
            img: '015PA.jpg',
        },{
            img: '016PA.jpg',
        },{
            img: '017PA.jpg',
        },{
            img: '018PA.jpg',
        },{
            img: '019PA.jpg',
        },{
            img: '020PA.jpg',
        },{
            img: '021PA.jpg',
        },{
            img: '022PA.jpg',
        },{
            img: '023PA.jpg',
        },{
            img: '024PA.jpg',
        },{
            img: '025PA.jpg',
        },{
            img: '026PA.jpg',
        },{
            img: '027PA.jpg',
        },{
            img: '028PA.jpg',
        },{
            img: '029PA.jpg',
        },{
            img: '030PA.jpg',
        }
    ],
    cat1002: [
        {
            img: '002PF.jpg',
        },{
            img: '003PF.jpg',
        },{
            img: '004PF.jpg',
        },{
            img: '005PF.jpg',
        },{
            img: '006PF.jpg',
        },{
            img: '007PF.jpg',
        },{
            img: '008PF.jpg',
        },{
            img: '009PF.jpg',
        },{
            img: '010PF.jpg',
        },{
            img: '011PF.jpg',
        },{
            img: '012PF.jpg',
        },{
            img: '013PF.jpg',
        },{
            img: '014PF.jpg',
        },{
            img: '015PF.jpg',
        },{
            img: '016PF.jpg',
        },{
            img: '017PF.jpg',
        },{
            img: '018PF.jpg',
        },{
            img: '019PF.jpg',
        },{
            img: '020PF.jpg',
        },{
            img: '021PF.jpg',
        },{
            img: '022PF.jpg',
        },{
            img: '023PF.jpg',
        },{
            img: '024PF.jpg',
        },{
            img: '025PF.jpg',
        },{
            img: '026PF.jpg',
        },{
            img: '027PF.jpg',
        },{
            img: '028PF.jpg',
        },{
            img: '029PF.jpg',
        },{
            img: '030PF.jpg',
        },{
            img: '031PF.jpg',
        },{
            img: '032PF.jpg',
        },{
            img: '033PF.jpg',
        },{
            img: '034PF.jpg',
        },{
            img: '035PF.jpg',
        }
    ],
    cat1003: [
        {
            img: '002PR.jpg',
        },{
            img: '003PR.jpg',
        },{
            img: '004PR.jpg',
        },{
            img: '005PR.jpg',
        },{
            img: '006PR.jpg',
        },{
            img: '007PR.jpg',
        },{
            img: '008PR.jpg',
        },{
            img: '009PR.jpg',
        },{
            img: '010PR.jpg',
        },{
            img: '011PR.jpg',
        },{
            img: '012PR.jpg',
        },{
            img: '013PR.jpg',
        },{
            img: '014PR.jpg',
        },{
            img: '015PR.jpg',
        },{
            img: '016PR.jpg',
        },{
            img: '017PR.jpg',
        },{
            img: '018PR.jpg',
        },{
            img: '019PR.jpg',
        },{
            img: '020PR.jpg',
        },{
            img: '021PR.jpg',
        },{
            img: '022PR.jpg',
        },{
            img: '023PR.jpg',
        },{
            img: '024PR.jpg',
        },{
            img: '025PR.jpg',
        },{
            img: '026PR.jpg',
        },{
            img: '027PR.jpg',
        },{
            img: '028PR.jpg',
        },{
            img: '029PR.jpg',
        },{
            img: '030PR.jpg',
        },{
            img: '031PR.jpg',
        },{
            img: '032PR.jpg',
        },{
            img: '033PR.jpg',
        },{
            img: '034PR.jpg',
        },{
            img: '035PR.jpg',
        },{
            img: '036PR.jpg',
        },{
            img: '037PR.jpg',
        },{
            img: '038PR.jpg',
        },{
            img: '039PR.jpg',
        },{
            img: '040PR.jpg',
        },{
            img: '041PR.jpg',
        },{
            img: '042PR.jpg',
        },{
            img: '043PR.jpg',
        },{
            img: '044PR.jpg',
        },{
            img: '045PR.jpg',
        },{
            img: '046PR.jpg',
        },{
            img: '047PR.jpg',
        }
    ],
    cat2001: [
        {
            img: '002PO.jpg',
        },{
            img: '003PO.jpg',
        },{
            img: '004PO.jpg',
        },{
            img: '005PO.jpg',
        },{
            img: '006PO.jpg',
        },{
            img: '007PO.jpg',
        },{
            img: '008PO.jpg',
        },{
            img: '009PO.jpg',
        },{
            img: '010PO.jpg',
        },{
            img: '011PO.jpg',
        },{
            img: '012PO.jpg',
        },{
            img: '013PO.jpg',
        },{
            img: '014PO.jpg',
        },{
            img: '015PO.jpg',
        },{
            img: '016PO.jpg',
        },{
            img: '017PO.jpg',
        },{
            img: '018PO.jpg',
        },{
            img: '019PO.jpg',
        },{
            img: '020PO.jpg',
        },{
            img: '021PO.jpg',
        },{
            img: '022PO.jpg',
        },{
            img: '023PO.jpg',
        },{
            img: '024PO.jpg',
        },{
            img: '025PO.jpg',
        },{
            img: '026PO.jpg',
        },{
            img: '027PO.jpg',
        },{
            img: '028PO.jpg',
        },{
            img: '029PO.jpg',
        },{
            img: '030PO.jpg',
        },{
            img: '031PO.jpg',
        },{
            img: '032PO.jpg',
        },{
            img: '033PO.jpg',
        },{
            img: '034PO.jpg',
        },{
            img: '035PO.jpg',
        },{
            img: '036PO.jpg',
        }
    ],
    cat2002: [
        {
            img: '2L.jpg',
        },{
            img: '3L.jpg',
        },{
            img: '4L.jpg',
        },{
            img: '5L.jpg',
        },{
            img: '6L.jpg',
        },{
            img: '7L.jpg',
        },{
            img: '8L.jpg',
        },{
            img: '9L.jpg',
        },{
            img: '10L.jpg',
        },{
            img: '11L.jpg',
        },{
            img: '12L.jpg',
        },{
            img: '13L.jpg',
        },{
            img: '14L.jpg',
        },{
            img: '15L.jpg',
        },{
            img: '16L.jpg',
        },{
            img: '17L.jpg',
        },{
            img: '18L.jpg',
        },{
            img: '19L.jpg',
        },{
            img: '20L.jpg',
        },{
            img: '21L.jpg',
        },{
            img: '22L.jpg',
        },{
            img: '23L.jpg',
        },{
            img: '24L.jpg',
        },{
            img: '25L.jpg',
        },{
            img: '26L.jpg',
        },{
            img: '27L.jpg',
        },{
            img: '28L.jpg',
        },{
            img: '29L.jpg',
        },{
            img: '30L.jpg',
        },{
            img: '31L.jpg',
        },{
            img: '32L.jpg',
        },{
            img: '33L.jpg',
        },{
            img: '34L.jpg',
        },{
            img: '35L.jpg',
        },{
            img: '36L.jpg',
        },{
            img: '37L.jpg',
        },
    ],
    cat2003: [
        {
            img: '002PE.jpg',
        },{
            img: '003PE.jpg',
        },{
            img: '004PE.jpg',
        },{
            img: '005PE.jpg',
        },{
            img: '006PE.jpg',
        },{
            img: '007PE.jpg',
        },{
            img: '008PE.jpg',
        },{
            img: '009PE.jpg',
        },{
            img: '010PE.jpg',
        },{
            img: '011PE.jpg',
        },{
            img: '012PE.jpg',
        },{
            img: '013PE.jpg',
        },{
            img: '014PE.jpg',
        },{
            img: '015PE.jpg',
        },{
            img: '016PE.jpg',
        },{
            img: '017PE.jpg',
        },{
            img: '018PE.jpg',
        },{
            img: '019PE.jpg',
        },{
            img: '020PE.jpg',
        },{
            img: '021PE.jpg',
        },{
            img: '022PE.jpg',
        },{
            img: '023PE.jpg',
        },{
            img: '024PE.jpg',
        },{
            img: '025PE.jpg',
        },{
            img: '026PE.jpg',
        },{
            img: '027PE.jpg',
        },{
            img: '028PE.jpg',
        },{
            img: '029PE.jpg',
        },{
            img: '030PE.jpg',
        },{
            img: '031PE.jpg',
        },{
            img: '032PE.jpg',
        },{
            img: '033PE.jpg',
        },{
            img: '034PE.jpg',
        },{
            img: '035PE.jpg',
        },{
            img: '036PE.jpg',
        },{
            img: '038PE.jpg',
        },{
            img: '039PE.jpg',
        }
    ],
    cat3001: [
        {
            img: '002TA.jpg',
        },{
            img: '003TA.jpg',
        },{
            img: '004TA.jpg',
        },{
            img: '005TA.jpg',
        },{
            img: '006TA.jpg',
        },{
            img: '007TA.jpg',
        },{
            img: '008TA.jpg',
        },{
            img: '009TA.jpg',
        },{
            img: '010TA.jpg',
        },{
            img: '011TA.jpg',
        },{
            img: '012TA.jpg',
        },{
            img: '013TA.jpg',
        },{
            img: '014TA.jpg',
        },{
            img: '015TA.jpg',
        },{
            img: '016TA.jpg',
        },{
            img: '017TA.jpg',
        },{
            img: '018TA.jpg',
        },{
            img: '019TA.jpg',
        },{
            img: '020TA.jpg',
        },{
            img: '021TA.jpg',
        },{
            img: '022TA.jpg',
        },{
            img: '023TA.jpg',
        },{
            img: '024TA.jpg',
        },{
            img: '025TA.jpg',
        },{
            img: '026TA.jpg',
        },{
            img: '027TA.jpg',
        },{
            img: '028TA.jpg',
        },{
            img: '029TA.jpg',
        },{
            img: '031TA.jpg',
        },{
            img: '032TA.jpg',
        }
    ],
    cat3002: [
        {
            img: '002TSL.jpg',
        },{
            img: '003TSL.jpg',
        },{
            img: '004TSL.jpg',
        },{
            img: '005TSL.jpg',
        },{
            img: '006TSL.jpg',
        },{
            img: '007TSL.jpg',
        },{
            img: '008TSL.jpg',
        },{
            img: '009TSL.jpg',
        },{
            img: '010TSL.jpg',
        },{
            img: '011TSL.jpg',
        },{
            img: '012TSL.jpg',
        },{
            img: '013TSL.jpg',
        },{
            img: '014TSL.jpg',
        },{
            img: '015TSL.jpg',
        },{
            img: '016TSL.jpg',
        },{
            img: '017TSL.jpg',
        },{
            img: '018TSL.jpg',
        },{
            img: '019TSL.jpg',
        },{
            img: '020TSL.jpg',
        },{
            img: '021TSL.jpg',
        },{
            img: '022TSL.jpg',
        },{
            img: '023TSL.jpg',
        },{
            img: '024TSL.jpg',
        },{
            img: '025TSL.jpg',
        },{
            img: '026TSL.jpg',
        },{
            img: '027TSL.jpg',
        },{
            img: '028TSL.jpg',
        },{
            img: '029TSL.jpg',
        },{
            img: '030TSL.jpg',
        },{
            img: '031TSL.jpg',
        },{
            img: '032TSL.jpg',
        },{
            img: '033TSL.jpg',
        }
    ],
    cat3003: [
        {
            img: '002TF.jpg',
        },{
            img: '003TF.jpg',
        },{
            img: '004TF.jpg',
        },{
            img: '005TF.jpg',
        },{
            img: '006TF.jpg',
        },{
            img: '007TF.jpg',
        },{
            img: '008TF.jpg',
        },{
            img: '009TF.jpg',
        },{
            img: '010TF.jpg',
        },{
            img: '011TF.jpg',
        },{
            img: '012TF.jpg',
        },{
            img: '013TF.jpg',
        },{
            img: '014TF.jpg',
        },{
            img: '015TF.jpg',
        },{
            img: '016TF.jpg',
        },{
            img: '017TF.jpg',
        },{
            img: '018TF.jpg',
        },{
            img: '019TF.jpg',
        },{
            img: '020TF.jpg',
        },{
            img: '021TF.jpg',
        },{
            img: '022TF.jpg',
        },{
            img: '023TF.jpg',
        },{
            img: '024TF.jpg',
        },{
            img: '025TF.jpg',
        },{
            img: '026TF.jpg',
        },{
            img: '027TF.jpg',
        },{
            img: '028TF.jpg',
        },{
            img: '029TF.jpg',
        },{
            img: '030TF.jpg',
        },{
            img: '031TF.jpg',
        },{
            img: '032TF.jpg',
        }
    ]
}

// Routes
app.get('/', (req, res) => res.render('index', context));
// Category 1
app.get('/cat-1', (req, res) => res.render('cat-1', context));
// Category 2
app.get('/cat-2', (req, res) => res.render('cat-2', context));
// Category 3
app.get('/cat-3', (req, res) => res.render('cat-3', context));
// About
app.get('/about', (req, res) => res.render('about', context));
// Contact
app.get('/contact', (req, res) => res.render('contact'));

// Server listener
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));