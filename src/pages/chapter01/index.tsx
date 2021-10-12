/*
 * @Author: your name
 * @Date: 2021-10-12 22:36:05
 * @LastEditTime: 2021-10-12 23:58:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /geek-react-hooks/src/pages/chapter01/index.tsx
 */
import { FC, useState, useCallback } from "react";

interface Props {}

interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  id: number;
  avatar: string;
}

const Chapter01: FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([] as IUser[]);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/users");
      const { data } = (await res.json()) as { data: IUser[] };
      setUserList(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <button onClick={fetchUser} disabled={loading}>
        {loading ? "loading..." : "show user"}
      </button>
      <ul>
        {userList.map((item) => {
          return <li key={item.id}>{item.first_name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Chapter01;
