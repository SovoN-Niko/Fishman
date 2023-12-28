import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Header(props) {
  return (
    <React.Fragment>
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">FishmanShop</div>
        <nav>
          <ul className="flex space-x-4">
            <li className="cursor-pointer"> Главная
            </li>
            <li className="cursor-pointer">Корзина</li>
            <li className="cursor-pointer"> 
            <Link
              to="/?signin"
              onClick={() => {
                props.setPage("home");
              }}
            >
              <span>Пользователь</span>
            </Link></li>
          </ul>
        </nav>
      </div>
    </header>
    </React.Fragment>     

  );
}
