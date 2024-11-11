import React from 'react'

interface ButtonProps {
    variant: Variant
    text:string
    onCLick:()=>void
}
export default function Butoon({variant,text,onCLick}:ButtonProps){
    return (
        <button
        type='button'
        className={`btn btn-${variant}`}
        onClick={onCLick}

        >{text}</button>)}
            
            