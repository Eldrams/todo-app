
import TodoItem from "@/components/todoItem";
import prisma from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";


async function toggleTodo(id: string, complete: boolean) {
  "use server"
  
  await prisma.todo.update({where: {id}, data: {complete} })
}

async function deleteItem(id: string){
  "use server"

  await prisma.todo.delete({where: {id}})
  redirect('/');
}

export default async function Home() {
  
  const todos = await prisma.todo.findMany()
  // await prisma.todo.create({data: {title: "test", complete: false } })
  
  return (
    <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-3xl">To-Dos</h1>
      <Link className="text-2xl border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
    </header>
    <ul className="pl-4 text-[2rem]">
      {todos.map((todo) => (
        <TodoItem deleteItem={deleteItem} toggleTodo={toggleTodo} key={todo.id} {...todo}/>
      ))}
    </ul>
    </>
  )
}
