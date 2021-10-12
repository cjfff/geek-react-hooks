/*
 * @Author: your name
 * @Date: 2021-10-12 22:33:13
 * @LastEditTime: 2021-10-12 23:13:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /geek-react-hooks/src/App.tsx
 */
import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

const links = routes[0].routes;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {links!.map((item) => {
            return (
              <NavLink to={item.path as string} key={item.path as string}>
                {item.path}
              </NavLink>
            );
          })}
        </div>
        {renderRoutes(routes)}
      </BrowserRouter>
    </div>
  );
}

export default App;
