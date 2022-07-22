import React from 'react'

const Review = () => {
  return (
    <div>
        <section className="review" id="review">
        <h1 className="heading"> customer's <span>review</span> </h1>
        <div className="box-container">
          <div className="box">
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam nesciunt eaque nulla dignissimos.</p>
            <div className="user">
              <img src="images/pic-1.png" alt="" />
              <div className="user-info">
                <h3>john deo</h3>
                <span>happy customer</span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam nesciunt eaque nulla dignissimos.</p>
            <div className="user">
              <img src="images/pic-2.png" alt="" />
              <div className="user-info">
                <h3>john deo</h3>
                <span>happy customer</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores laboriosam praesentium enim maiores? Ad repellat voluptates alias facere repudiandae dolor accusamus enim ut odit, aliquam nesciunt eaque nulla dignissimos.</p>
            <div className="user">
              <img src="images/pic-3.png" alt="" />
              <div className="user-info">
                <h3>john deo</h3>
                <span>happy customer</span>
              </div>
            </div>
          </div>
          

          
          
        </div>
      </section>
    </div>
  )
}

export default Review