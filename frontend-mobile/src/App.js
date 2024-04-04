import { useCookies } from "react-cookie";

import logo from "./images/logo.jpg";
import avatar from "./images/avatar.png";
import "./App.css";
import { useEffect, useState } from "react";

const JOKES = [
  {
    id: 1,
    content: `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,
  },
  {
    id: 2,
    content: `Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"`,
  },
  {
    id: 3,
    content: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
  },
  {
    id: 4,
    content: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
  },
];

function App() {
  const [cookies, setCookie] = useCookies(["likeList"]);
  const [jokes, setJokes] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (cookies.likeList) {
      const likeList = [...cookies.likeList];
      const newJoke = JOKES.filter(
        (joke) => likeList.findIndex((like) => like.jokeId === joke.id) === -1
      );
      setLikeList(likeList);
      setJokes(newJoke);
    } else {
      setJokes(JOKES);
      setLikeList([]);
    }
  }, [cookies.likeList]);

  const handleLike = () => {
    if (jokes.length === 0) return;

    const newLikeList = [...likeList, { jokeId: jokes[index].id, like: true }];
    setCookie("likeList", newLikeList);
  };
  const handleDislike = () => {
    if (jokes.length === 0) return;

    const newLikeList = [...likeList, { jokeId: jokes[index].id, like: false }];
    setCookie("likeList", newLikeList);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="wrapper">
            <div className="header-logo">
              <img src={logo} />
            </div>
            <div className="user">
              <div className="user-info">
                <div className="user-info-desc">Handicafted by</div>
                <div className="user-info-name">Jim HLS</div>
              </div>
              <div className="user-avatar">
                <img src={avatar} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner">
        <div className="banner-title">A joke a day keeps the doctor away</div>
        <div className="banner-sub-title">
          If you joke wrong way, your teeth have to pay. (Serious)
        </div>
      </div>
      <div className="joke">
        <div className="joke-content">
          {jokes?.length
            ? jokes[index].content
            : "That's all the jokes for today! Come back another day!"}
        </div>
        <div className="divider"></div>
        <div className="joke-actions">
          <button
            className="btn btn-blue"
            disabled={jokes?.length === 0}
            onClick={handleLike}
          >
            This is Funny!
          </button>
          <button
            className="btn btn-green"
            disabled={jokes?.length === 0}
            onClick={handleDislike}
          >
            This is not funny.
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          This website is created as part of Hlsolutions program. The meterials
          contained on this website are provided for general
          <br />
          infomation only and do not consitute any form of advice. HLS assumes
          no responsibility for the accuracy of any particular statement and
          <br />
          accepts no liability for any loss or damage which may arise from
          reliance on the information contained on this site.
        </div>
        <div className="footer-copyright">Copyright 2021 HLS</div>
      </div>
    </div>
  );
}

export default App;
