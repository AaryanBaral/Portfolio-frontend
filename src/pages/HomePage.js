import React from 'react'
import image from "../my.jpeg"
import "../styles/HomePage.css"

export default function HomePage() {
  return (
    <>
        <section className="home-main">
            <div className="my-img">
                <img src={image} alt="profile" />
            </div>
            <div className="main-body">
                <h1>Hi there Welcome to my Portfolio website</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis libero aliquid repellat corporis eaque veritatis quod alias maiores possimus. Ut dolorum magni laudantium porro? Harum, voluptatem. Optio fugiat temporibus culpa officiis beatae pariatur ipsam, ducimus magnam et, vero ipsa eos odit sint?</p>
            </div>
        </section>
    </>
  )
}
