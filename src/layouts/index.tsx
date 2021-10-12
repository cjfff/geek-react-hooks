/*
 * @Author: your name
 * @Date: 2021-10-12 22:41:05
 * @LastEditTime: 2021-10-12 23:57:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /geek-react-hooks/src/layouts/index.tsx
 */

import { FC } from "react";
import { renderRoutes, RouteConfig } from "react-router-config";

interface Props {
  route: RouteConfig;
}

const Layout: FC<Props> = ({ route }) => {
  return renderRoutes(route.routes);
};

export default Layout;
