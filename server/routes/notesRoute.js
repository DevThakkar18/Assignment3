let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');
const notes = require('../models/notes');

//Connecting with notesModel
let List=require('../models/notes');
let noteController=require('../controller/notesRoute')

// Read operation
//Getting route for the list of notes

router.get('/',noteController.displayNotesList);

// Create Operation
// Getting route for displaying create operation
router.get('/add', noteController.displayAddPage);
// Post route for processing the create operation
router.post('/add',noteController.processAddPage);

// Update Operation
// Getting route for displaying edit operation
router.get('/edit/:id',noteController.displayEditPage);
// Post route for processing the edit operation
router.post('/edit/:id',noteController.processEditPage);
// Delete Operation
// Getting route for delete operation
router.get('/delete/:id',noteController.performDelete);
module.exports=router;