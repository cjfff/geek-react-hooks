/*
 * @Author: your name
 * @Date: 2021-10-12 22:36:34
 * @LastEditTime: 2021-10-12 22:46:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /geek-react-hooks/src/routes/index.ts
 */
import { RouteConfig } from 'react-router-config';
import Root from '../layouts'
import Chapter01 from '../pages/chapter01'

const routes = [
    {
        component: Root,
        routes: [
            {
                path: "/chapter-01",
                exact: true,
                component: Chapter01
            },
        ]
    }
] as RouteConfig[];

export default routes