import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">

            {/* 1. Guru Roast Leaderboard */}
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3">
                <Link to="/guru-roast">
                  <div className="p-4">
                    <i className="fa fa-3x fa-fire text-danger mb-4" />
                    <h5 className="mb-3">Guru Roast Leaderboard</h5>
                    <p>
                      Vote on the funniest scam-course memes. Winners get $SOL.  
                      Pure community fun & engagement!
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* 2. Certificate Generator */}
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3">
                <Link to="/certificate">
                  <div className="p-4">
                    <i className="fa fa-3x fa-certificate text-success mb-4" />
                    <h5 className="mb-3">Certificate Generator</h5>
                    <p>
                      Create a funny “Graduation Certificate” meme.  
                      Add your name & flex it on Twitter.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* 3. Leaderboard / Exam System */}
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3">
                <Link to="/exam">
                  <div className="p-4">
                    <i className="fa fa-3x fa-trophy text-warning mb-4" />
                    <h5 className="mb-3">Leaderboard / Exam</h5>
                    <p>
                      Weekly fun quizzes & meme challenges.  
                     
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* 4. Roast-a-Guru */}
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3">
                <Link to="/roast-guru">
                  <div className="p-4">
                    <i className="fa fa-3x fa-laugh text-primary mb-4" />
                    <h5 className="mb-3">Roast-a-Guru</h5>
                    <p>
                      Meme contest where we roast famous “course sellers.”  
                      Funniest memes get featured on the wall of fame!
                    </p>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
