//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/new/email-address', (req, res) => {
    res.redirect('/new/code')
})

router.post('/new/code', (req, res) => {
    res.redirect('/new/name')
})

router.post('/new/name', (req, res) => {
    res.redirect('/new/country')
})

router.post('/new/country', (req, res) => {
    res.redirect('/new/juggling-balls')
})

router.post('/new/juggling-balls', (req, res) => {
    if (req.body.new.numberOfBalls == 'None - I cannot juggle') {
        res.redirect('/new/not-eligible')    
    } else {
        res.redirect('/new/juggling-tricks')    
    }
})


router.post('/new/juggling-tricks', (req, res) => {
    res.redirect('/new/juggling-objects')
})

router.post('/new/juggling-objects', (req, res) => {
    res.redirect('/new/check')
})

