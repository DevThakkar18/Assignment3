let mongoose=require('mongoose')

//Creating model of NOTES
let notesModel=mongoose.Schema({
    title: String,
    list: String
},
{
    collection:"list"
}
);
module.exports=mongoose.model('List',notesModel);