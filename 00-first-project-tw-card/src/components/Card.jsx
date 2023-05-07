import { useState } from "react";
import "./card.css";
// eslint-disable-next-line
function Card({ name, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const classBtnFollow = isFollowing
    ? "card__btn-follow btn--isFollowing"
    : "card__btn-follow";
  const textBtnFollow = isFollowing ? "Siguiendo" : "seguir";

  function handleClickFollow() {
    setIsFollowing(!isFollowing);
  }

  return (
    <div className="card">
      <div className="card__details">
        <img
          src={`https://unavatar.io/github/${userName}`}
          alt={`Avatar de ${name}`}
        />
        <div className="card__user">
          <p className="name">
            <a href="#">{name}</a>
          </p>
          <p className="user">@{userName}</p>
        </div>
      </div>
      <button onClick={handleClickFollow} className={classBtnFollow}>
        <span className="text">{textBtnFollow}</span>
        <span className="text--isNotFollowing">Dejar de seguir</span>
      </button>
    </div>
  );
}

export { Card };
