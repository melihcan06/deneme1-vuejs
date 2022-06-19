import axios from 'axios'

var NoteService = {

    noteLink:"http://localhost:8081/note/",
    noteItemJson : {
        id:1,
        noteId:1,
        title:"",
        description:"",
        content:"",
    },

    async getAllNotes(){
        let resp = await axios.get(this.noteLink+'list');
        return resp;
    },

    setNoteId(){
        /*var _this=this;
        this.getAllNotes().then((resp) => {
            _this.noteId = resp.data[0].noteId;
        });*/
        //debugger;
    },

    saveNoteItem(){
        axios.post(this.noteLink+'save',this.noteItemJson);
    }

}
export default NoteService;

/*getAllNotes();
setNoteId();
saveNoteItem();*/