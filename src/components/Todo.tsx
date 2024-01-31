"use client";

import React from 'react'
import { useState, useEffect } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Input } from './ui/input';
import { Dialog } from '@radix-ui/react-dialog';
import { DialogContent } from '@radix-ui/react-dialog';
import { DialogDescription } from '@radix-ui/react-dialog';

interface todos {
  id: number;
  title: string;
  completed: boolean;
}

export const Todo = () => {
  const [todos, setTodos] = useState<todos[]>([]);
  const [todoName, setTodoName] = useState<string>("");
  
  useEffect(()=>{
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);
  
  const addTodos = () => {
    const newTodo = {
      id: Math.random(),
      title: todoName,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoName("");
    localStorage.setItem("todos",JSON.stringify([...todos, newTodo]));
  }
  const deleteTodo = (id:number) => {
    const newTodos = todos.filter((todo)=>todo.id != id);
    setTodos(newTodos);
    localStorage.setItem("todos",JSON.stringify(newTodos));
  };
  const checkTodo = (id:number) => {
    const newTodos = todos.map((t)=>{
      if(t.id===id){
        t.completed = !t.completed;
      }
      return t;
    });
    setTodos(newTodos);
    localStorage.setItem("todos",JSON.stringify(newTodos));
  };
  return (
    <div className='w-full h-full flex justify-center items-center flex-col space-y-10 p-3 rounded-lg bg-gray-50'>
      <div className='P-4 flex flex-col space-y-2 text-black border p-3 rounded-md'>
        <Input className="sm:text-wrap" placeholder="Write a Todo..." value={todoName} onChange={(e)=>setTodoName(e.target.value)}/>
        <button className='p-3 bg-violet-600 rounded hover:bg-violet-500 font-bold text-white' onClick={ addTodos }>Add Todo</button>
      </div>
      <div className='flex flex-col bg-gray-100 p-2 rounded-lg px-4'>
        {todos.map((todo) => {
          return (
            <div className='flex justify-between items-center w-full my-2 bg-gray-50 bg-opacity-40 rounded-lg p-4'>
              <div className='flex flex-row space-x-2'>
                <input type="checkbox"
                className='ml-2'
                checked={todo.completed}
                onChange={()=>{
                  checkTodo(todo.id)
                }} 
                 />
              </div>
              <div className='text-xl flex ml-4 truncate'>{todo.title}</div>
              <div className='ml-3' onClick={() => {
                return (
                  <Dialog>
                    <DialogContent>
                      <DialogDescription>{todo.title}</DialogDescription>
                    </DialogContent>
                  </Dialog>
                )
              }}><HiOutlineDotsVertical/></div>
              <div className='text-xl ml-3 '>
                {todo.completed ? <div className='mr-3'>Completed</div> : <div className='mr-3'>Incomplete</div>}
              </div>
              <button className="ml-4 justify-center bg-slate-50 p-4 rounded-xl ease-duration-50 hover:bg-slate-100 " onClick={()=>{deleteTodo(todo.id)}}>Delete Todo</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
