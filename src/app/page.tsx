
"use client"
import Alert from '@/components/alert'
import Card from '@/components/card'
import Paginatins from '@/components/paginatins'
import Button from '@/components/button'
import React from 'react'

export default function Home
() {
  return (
    <div>
    <div className='d-flex gap-5 justify-content-center mt-5'>
      Home
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div className='d-flex flex-column align-items-center mt-5'>
    <button className='btn btn-blue'>UNAM</button>
    <button className='btn btn-gold'>UNAM</button>
<h1 className="text-blue">Hola</h1>
    <Paginatins pages={5}/>
    <Paginatins pages={10}/>
    <Alert color='primary'/>
    <Alert color='danger'/>
    <Alert color='secondary' text='Mensaje 3'/>
    <Alert color='warning' text='Mensaje 4'/>
    <Button variant='blue' text='HOlaaaa' onCLick={()=>console.log("Boton Azul")}/>
    <Button variant='danger' text='Adiooos' onCLick={()=>console.log("Boton danger")}/>


    </div>
    </div>
  )
}
