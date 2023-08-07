import React, { useEffect, useState } from 'react';
import { UserService } from './services/user.service';
import { User } from './interfaces/user.interface';
import { UserCard } from './components/UserCard';
import { Row, ConfigProvider } from 'antd';
import './App.css';

function App() {
  const api = new UserService();
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    api.getUsers().then(({ data }) => {
      const usersAvatarAdded = appendAvatar(data);
      setUsers(usersAvatarAdded);
    }).catch(e => console.error(e));
  }

  const appendAvatar = (users: User[]): User[] => {
    return users.map((user: User) => {
      return { ...user, avatar: `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options%5Bmood%5D%5B%5D=happy` }
    });
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 2,
          colorBorderSecondary: '#E7E7E7'
        },
        components: {
          Card: {
            actionsBg: '#F5F5F5',
            headerBg: 'black',
            borderRadius: 0
          }
        }
      }}
    >
      <div className={'row-wrapper'}>
        <Row gutter={[32, 32]}>
          {users.map((user: User) => <UserCard user={user} key={user.id} />)}
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default App;
