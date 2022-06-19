<template>
    <h4>Note:{{noteId}}</h4>
    <label for="title">Title:</label>
    <input type="text" id="title" v-model="title">
    <br><br>
    <label for="descrip">Description:</label>
    <input type="text" id="descrip" v-model="description">
    <br><br>
    <label for="note">Note:</label>
    <input type="text" id="note" v-model="content">
    <br><br>
    <button @click="saveNoteItem">Save</button>
</template>

<script>
import axios from 'axios'
    export default{
        name:'NoteItem',
        data(){
            return{
                noteLink:"http://localhost:8081/note/",
                id:1,
                noteId:1,
                title:"",
                description:"",
                content:"",
                flag:true
            }
        },
        methods:{
            async getAllNotes(){
                //debugger;
                let resp = await axios.get(this.noteLink+'list');
                return resp;
            },
            setNoteId(){
                var _this=this;
                this.getAllNotes().then((resp) => {
                    _this.noteId = resp.data[0].noteId;
                });
                //debugger;
            },
            saveNoteItem(){
                var noteItemJson = {
                    id:this.id,
                    noteId:this.noteId,
                    title:this.title,
                    description:this.description,
                    content:this.content
                };
                //debugger;
                axios.post(this.noteLink+'save',noteItemJson);
                /*if(this.flag){
                    this.title="asd";
                    this.flag=false;
                }
                else{
                    this.title="";
                    this.flag=true;
                }*/
                
            }
        }
    }
</script>

<!--script>
import {saveNoteItem} from './NoteService.js';
export default{
    name:'NoteItem',
    data(){
        return {
            noteList:[]
        }
    },
    methods:{
        saveNoteItem
    }
}

</script-->

<!--script type="module" src="./NoteItemService.js"></script-->

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
