import React, { useEffect, useState } from 'react';
import { UserService } from './services/user.service';
import { User } from './interfaces/user.interface';
import { ConfigProvider } from 'antd';
import './App.css';
import { UserList } from './components/UserList';

function App() {
  const api = new UserService();
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    api.getUsers().then((users: User[]) => {
      setUsers(users);
    }).catch(e => console.error(e));
  }, []);

  const theme = {
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
  }

  return (
    <ConfigProvider
      theme={theme}
    >
      <div className='row-wrapper'>
        <UserList users={users} />
      </div>
    </ConfigProvider>
  );
}

export default App;
