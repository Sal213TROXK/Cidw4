import React from 'react'
interface AlertProps{
  variant: Variant
  text: string
}
export default function Alert({text= "Valor Default", variant }:AlertProps) {
  return (
<div className={`alert alert-${variant}`} role="alert">
{text}
</div>
  )
}
