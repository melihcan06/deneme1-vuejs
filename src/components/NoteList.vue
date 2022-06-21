<template>
<button @click="listNotes">List Notes</button>
<br><br>
<table v-if="notes.length>0">
    <tr>
        <!--th>id</th-->
        <th>noteId</th>
        <th>title</th>
        <th>description</th>
        <th>note</th>
        <th>update</th>
    </tr>
    <tr v-for="(note, index) in notes" :key="index">
        <!--td>{{note.id}}</td-->
        <td>{{note.noteId}}</td>
        <td>{{note.title}}</td>
        <td>{{note.description}}</td>
        <td>{{note.content}}</td>
        <button @click="noteSelected(index)">Select</button>
    </tr>
</table>
</template>



<script>
import noteService from './NoteService.js'

export default{
    name:'NoteList',
    setup(){
        const {getAllNotes, noteItemJson, notes} = noteService();
        return {   
            notes,      
            noteItemJson,   
            async listNotes(){
                await getAllNotes();
            },
            noteSelected(idx){
                //debugger;
                noteItemJson.value=notes.value[idx];
                //noteItemJson.value.title=noteItemJson.value.noteId+10;
                //noteItemJson.value.noteId=noteItemJson.value.noteId+10;
                console.log(noteItemJson.value);
                //debugger;
            }
        }
    }
}

</script>

<style>

table, th, td, ul, li {
  border: 1px solid black;
}


</style>