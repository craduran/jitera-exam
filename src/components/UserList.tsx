import { Row } from 'antd';
import React from 'react';
import { User } from '../interfaces/user.interface';
import { UserCard } from './UserCard';

interface Props {
    users: User[];
}

export const UserList: React.FC<Props> = ({ users }: Props) => {
    return (
        <Row gutter={[32, 32]}>
            {users.map((user: User) => <UserCard user={user} key={user.id} />)}
        </Row>
    );
}