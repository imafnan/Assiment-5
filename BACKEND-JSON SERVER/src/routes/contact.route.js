const express = require('express')
const router = express.Router()
const  {createContact, getContactIteam, deleteContact, getContactIteamOne, updateContact} = require('../controllers/contact.controller')

router.post('/create', createContact)
router.get('/', getContactIteam)
router.post('/delete', deleteContact)
router.get('/getOne/:id', getContactIteamOne)
router.put('/update/:id', updateContact)

module.exports = router;    