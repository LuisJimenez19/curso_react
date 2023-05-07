import { Card } from "./Card";
import { useUsers } from "../hooks/useUsers";
import "./list-cards.css";
function ListCards() {
  const users = useUsers();
  return (
    <div className="container-to-follow">
      <header className="header-description">
        <h2 className="title">A quién seguir</h2>
      </header>
      <div className="container-cards">
        {users.map(({ userName, name, isFollowing } ) => {
          return (
            <Card
            name={name}
            userName={userName}
            initialIsFollowing={isFollowing}
            key={userName}
          />
          )
        })}
      </div>
      <footer className="footer-description">
        <a href="#">Mostrar más</a>
      </footer>
    </div>
  );
}

export { ListCards };
