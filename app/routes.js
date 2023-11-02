//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// EMAIL /////////

router.post('/new/email-address', (req, res) => {
    if (req.query.returnUrl) {
        res.redirect('/new/check')    
    } else {
        res.redirect('/new/code')    
    }
})

// CODE  ////////////////

router.post('/new/code', (req, res) => {
    if (req.query.returnUrl) {
        res.redirect('/new/check')    
    } else {
        res.redirect('/new/name')    
    }
})

// NAME ///////////////////

router.post('/new/name', (req, res) => {
    if (req.query.returnUrl) {
        res.redirect('/new/check')    
    } else {
        res.redirect('/new/country')
    }
})

// COUNTRY //////////////

router.post('/new/country', (req, res) => {
    if (req.query.returnUrl) {
        res.redirect('/new/check')    
    } else {
        res.redirect('/new/juggling-balls')
    }
})


// HOW MANY BALLS /////////

router.post('/new/juggling-balls', (req, res) => {

    if (req.query.returnUrl) {
        res.redirect('/new/check')    
    }
    else if
        (req.body.new.numberOfBalls == 'None - I cannot juggle') {
            res.redirect('/new/not-eligible')    
    } else
    {
        res.redirect('/new/juggling-tricks')       
    }
})


// BEST TRICK /////////

router.post('/new/juggling-tricks', (req, res) => {
    if (req.query.returnUrl) {
        res.redirect('/new/check')    
    } else {
    res.redirect('/new/juggling-objects')
    }
})


// JUGGLING OBJECTS /////////

router.post('/new/juggling-objects', (req, res) => {
    if (req.query.returnUrl) {
        res.redirect('/new/check')
    } else {
        res.redirect('/new/check')
    }
})


// CONFIRMATION /////////

router.post('/new/check', (req, res) => {
    res.redirect('/new/confirmation')
})

