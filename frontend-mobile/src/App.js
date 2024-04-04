import logo from "./images/logo.jpg";
import avatar from "./images/avatar.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header class="header">
        <div className="container">
          <div class="wrapper">
            <div class="header-logo">
              <img src={logo} />
            </div>
            <div class="user">
              <div class="user-info">
                <div class="user-info-desc">Handicafted by</div>
                <div class="user-info-name">Jim HLS</div>
              </div>
              <div class="user-avatar">
                <img src={avatar} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="banner">
        <div class="banner-title">A joke a day keeps the doctor away</div>
        <div class="banner-sub-title">
          If you joke wrong way, your teeth have to pay. (Serious)
        </div>
      </div>
      <div class="joke">
        <div class="joke-content">
          A child asked his father, "How were people born?" So his father said,
          "Adam and Eve made babies, then their babies became adults and made
          babies, and so on." The child then went to his mother, asked her the
          same question and she told him, "We were monkeys then we evolved to
          become like we are now." The child ran back to his father and said,
          "You lied to me!" His father replied, "No, your mom was talking about
          her side of the family."
        </div>
        <div class="divider"></div>
        <div class="joke-actions">
          <button class="btn btn-blue">This is Funny!</button>
          <button class="btn btn-green">This is not funny.</button>
        </div>
      </div>
      <div class="footer">
        <div class="footer-content">
          This website is created as part of Hlsolutions program. The meterials
          contained on this website are provided for general
          <br />
          infomation only and do not consitute any form of advice. HLS assumes
          no responsibility for the accuracy of any particular statement and
          <br />
          accepts no liability for any loss or damage which may arise from
          reliance on the information contained on this site.
        </div>
        <div class="footer-copyright">Copyright 2021 HLS</div>
      </div>
    </div>
  );
}

export default App;
