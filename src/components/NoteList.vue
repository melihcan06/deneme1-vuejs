<template>
<button @click="listNotes">List Notes</button>
<br><br>
<!--ul v-for="(note, index) in noteList" :key="index">
    <li>{{note.id}} {{note.title}} {{note.description}} {{note.content}}</li>
</ul-->

<table v-if="noteList.length>0">
    <tr>
        <th>id</th>
        <th>noteId</th>
        <th>title</th>
        <th>description</th>
        <th>note</th>
        <th>update</th>
    </tr>
    <tr v-for="(note, index) in noteList" :key="index">
        <td>{{note.id}}</td>
        <td>{{note.noteId}}</td>
        <td>{{note.title}}</td>
        <td>{{note.description}}</td>
        <td>{{note.content}}</td>
        <button @click="noteSelected(index)">Select</button>
    </tr>
</table>
</template>



<script>
import axios from 'axios'
export default{
    name:'NoteList',
    data(){
        return {
            noteLink:"http://localhost:8081/note/",
            noteList:[]
        }
    },
    methods:{
        async listNotes(){
            let resp = await axios.get(this.noteLink+'list');
            this.noteList=resp.data;
            //debugger;
            return resp;
        },
        noteSelected(index){
            //NoteItem a indexteki elemanin bilgilerini setle
            console.log(index);
        }
    }
}

</script>

<style>

table, th, td, ul, li {
  border: 1px solid black;
}


</style>