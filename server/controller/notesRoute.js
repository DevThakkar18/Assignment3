let express=require('express');
let router=express.Router();
let mongoose=require('mongoose');
  

const notes = require('../models/notes');

//Connecting with notesModel
let List=require('../models/notes');

module.exports.displayNotesList=(req,res,next)=>{
    List.find((err,noteslist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            return res.render('notes/notesView',{
                title:'Notes',
                Noteslist : noteslist});
        }
    });
}


module.exports.displayAddPage=(req,res,next)=>{
    res.render('notes/add',{title:'Add Notes'})
}

module.exports.processAddPage=(req,res,next)=>{
    let newList=List({
        "title":req.body.title,
        "list":req.body.list
    });
    List.create(newList,(err,List)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/notes')
        }
    })
}

module.exports.displayEditPage=(req,res,next)=>{
    let id = req.params.id;
    List.findById(id,(err,listToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('notes/edit',{title: 'Edit Notes', store:listToEdit});
        }
    });
}

module.exports.processEditPage=(req,res,next)=>{
    let id=req.params.id;
    let updateList=List({
        "_id":id,
        "title":req.body.title,
        "list":req.body.list
    });
    List.updateOne({_id:id},updateList,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/notes')
        }
    });

}

module.exports.performDelete=(req,res,next)=>{
    let id =req.params.id;
    List.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/notes')
        }
    });
}