import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="contact" id="contact">
        <h1 className="heading"> <span> contact </span> us </h1>
        <div className="row">
          <form action>
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="number" placeholder="number" className="box" />
            <textarea name className="box" placeholder="message" id cols={30} rows={10} defaultValue={""} />
            <input type="submit" defaultValue="send message" className="btn" />
          </form>
          <div className="image">
            <img src="images/contact-img.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact