"use client"

import { useState } from "react";

type TodoItemProps = {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
    deleteItem: (id: string) => void;
}
  

export default function TodoItem({id, title, complete, toggleTodo, deleteItem}: TodoItemProps) {
    

    return (
        <li className="flex gap-1 items-center">
        <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)}/>
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
        <button onClick={() => deleteItem(id)} className="m-4 text-2xl border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >delete item</button>
    </li>
    )
}

