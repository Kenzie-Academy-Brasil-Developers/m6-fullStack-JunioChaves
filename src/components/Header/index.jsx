import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <header>
      <div className="container">
        <div>
          <div>
            <p className="paragraph">{user?.name}</p>
            <p className="paragraph">{user?.email}</p>
            <p className="paragraph">{user?.phone}</p>
          </div>

          <button className="btn outline" onClick={() => userLogout()}>
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};
