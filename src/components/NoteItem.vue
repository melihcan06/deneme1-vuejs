<template>
    <h4>Note:{{noteItemJson.noteId}}</h4>
    <label for="title">Title:</label>
    <input type="text" id="title" v-model="noteItemJson.title">
    <br><br>
    <label for="descrip">Description:</label>
    <input type="text" id="descrip" v-model="noteItemJson.description">
    <br><br>
    <label for="note">Note:</label>
    <input type="text" id="note" v-model="noteItemJson.content">
    <br><br>
    <button @click="saveNote">Save</button>
</template>

<script>
import { onMounted } from 'vue'
import noteService from './NoteService.js'
    export default{
        name:'NoteItem',
        setup(){
            onMounted(() => {
                //debugger;    
            })
            const {saveNoteItem, noteItemJson, getAllNotes} = noteService();
            return{
                noteItemJson,
                saveNote(){
                    saveNoteItem();
                    getAllNotes();
                }
            }
        },
        mounted() {
             //debugger;
        }
    }
</script>

<style>
label{
    font-family:Verdana;
    font-size:20px;
    width:200px;
}

input{
    width:200px;
}
</style>
