import React from 'react';
import {Grid} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import style from '../styles/todo.module.css';

export default function Todos(props) {

   return (
      <Grid item xs={12} md={12} xl={12} sm={12}>
         <div className={style.todoCard}>
            <p>{props.title}</p>
            <div>
               <EditIcon sx={{mr: 2, cursor: "pointer"}} onClick={() => props.editTodo(props.index)}/>
               <DeleteIcon color={"error"} sx={{cursor: "pointer"}} onClick={() => props.handleDelete(props.index)}/>
            </div>
         </div>
      </Grid>
   )
}