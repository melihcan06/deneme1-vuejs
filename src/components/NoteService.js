import axios from "axios"
import { ref,reactive } from "vue"

const noteApiLink = "http://localhost:8081/note/";
const notes = ref([]);
const noteItemJson = reactive({id:1,noteId:1,title:"a",description:"b",content:"c"});

const NoteService = () => {

    const getAllNotes = async () => {
        await axios.get(noteApiLink+'list').then((resp)=>{
            notes.value = resp.data;
        });
    }

    const saveNoteItem = () => {
        debugger;
        axios.post(noteApiLink+'save', noteItemJson);
    }
    
    return{
        getAllNotes,
        saveNoteItem,
        notes,
        noteItemJson
    }
}
export default NoteService;