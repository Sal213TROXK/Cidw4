import React from 'react'

export default function Card() {
  return (
    <div className="card m-5" style={{
        width: "18rem"
    }}>
    <img src="https://placehold.co/600x400" className="card-img-top" alt="UN gatito"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}
