import React from "react";
import "../PlayTest/PlayTest.css";
const PlayTestPage = () => {
  return (
    <div id="playtest__container">
      <div className="header__play">
        <img
          src="https://surveygizmolibrary.s3.amazonaws.com/library/175282/cropwb_resized_banner.png"
          alt=""
          className="sg-header-image"
          width={"100%"}
          style={{ paddingTop: "22vh" }}
        />
        <div className="play__tite">
          <h2>WB GAMES PLAYTESTER SIGN UP</h2>
        </div>
        <div className="play__text">
          <h2>Welcome!</h2>
          <div className="playmini__text">
            <p className="pone">
              WB Games is inviting gamers to playtest upcoming games in Seattle,
              Montreal, San Francisco, London, and Knutsford.
            </p>
            <p>
              We're dedicated to creating incredible games and we need YOUR
              help! We seek fans and players of all ages, backgrounds, and
              experience levels to provide feedback, ensuring we create the best
              games for you.
            </p>
          </div>
          <div className="play__sign">
            <p>To sign up:</p>
            <ul>
              <li>
                <a href="https://forms.gle/X8ezC6qSCK5tSmr36">
                  For
                  <b>
                    <u> 18+</u>
                  </b>
                  , click <b>HERE</b>
                </a>
              </li>
              <li>
                <a href="https://forms.gle/bm9n6Bj6TZZoFJEc7">
                  For minors
                  <b>
                    <u>(under 18)</u>,
                  </b>
                  click <b>HERE</b>
                </a>
                <b></b>
              </li>
            </ul>
          </div>
          <div className="note">
            <p>Note:</p>
            <ul className="note__ul">
              <li>
                (Parents/Guardians must sign up for minors using the minor form.
              </li>
              <li>
                If you're signing up multiple people, fill in the form once for
                each person.)
              </li>
            </ul>
          </div>

          <div className="secondtext__block">
            <h3>FAQs</h3>
            <div class="acor-container">
              <input type="radio" name="acor" id="acor1" checked="checked" />
              <label for="acor1">What happens after I sign up?</label>
              <div class="acor-body">
                <p>
                  When you register, you’ll need to provide some initial info
                  (age, contact info, location, etc.). Then we’ll email you
                  about playtest opportunities as they come up, including a
                  survey about your gaming habits. If you're eligible, we'll
                  invite you to a playtest with further details!
                </p>
              </div>

              <input type="radio" name="acor" id="acor2" />
              <label for="acor2">What will I do if I’m selected?</label>
              <div class="acor-body">
                <p>
                  Playtest activities vary! Most take place in-person at our
                  labs, but we sometimes run remote tests or send out surveys.
                  For on-site playtests, you'll try new or unreleased games or
                  services at our labs and share your feedback. These sessions
                  can last from a couple of hours to up to multiple days. We
                  have four in-person research facilities in Kirkland WA, San
                  Francisco CA, Montreal QC, and Knutsford UK with more
                  locations coming soon!
                </p>
              </div>

              <input type="radio" name="acor" id="acor3" />
              <label for="acor3">
                Can I talk about my experience with friends or online?
              </label>
              <div class="acor-body">
                <p>
                  No. All participants are required to sign a non-disclosure
                  agreement which prohibits you from sharing your experience
                  with anyone. WB Games takes confidentiality very seriously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayTestPage;
