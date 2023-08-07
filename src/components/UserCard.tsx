import { DeleteFilled, EditOutlined, GlobalOutlined, HeartOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Card, Col, Space, Typography } from 'antd';
import React from 'react';
import { User } from '../interfaces/user.interface';

const { Text, Title } = Typography;

interface Props {
    user: User;
}

const UserDetailsStyle = {
    mainStyle: { margin: 0, color: '#595959' },
    userIconStyle: {marginRight: '8px', fontSize: '20px'},
    usernameStyle: { margin: 0 }
};

const CardStyle = {
    bodyStyle: { backgroundColor: '#fff' },
    coverImageStyle: { height: '200px' },
    mainStyle: { width: '100%', backgroundColor: '#F5F5F5' },
    heartIconStyle: { fontSize: '24px', color: '#f5222d' },
    iconStyle: { fontSize: '24px' }
}

export const UserCard: React.FC<Props> = ({ user }: Props) => {
    return (
        <Col xs={24} sm={24} md={24} lg={6}>
            <Card
                bodyStyle={CardStyle.bodyStyle}
                style={CardStyle.mainStyle}
                cover={
                    <div className='card-cover-wrapper'>
                        <img alt={`${user.username} profile`} src={user.avatar} style={CardStyle.coverImageStyle} />
                    </div>
                }
                actions={[
                    <HeartOutlined style={CardStyle.heartIconStyle} key="heart" />,
                    <EditOutlined style={CardStyle.iconStyle} key="edit" />,
                    <DeleteFilled style={CardStyle.iconStyle} key="delete" />
                ]}>
                <Space direction="vertical">
                    <Title level={4} style={UserDetailsStyle.usernameStyle}>{user.name}</Title>
                    <Title level={5} style={UserDetailsStyle.mainStyle}><MailOutlined style={UserDetailsStyle.userIconStyle}/> {user.email}</Title>
                    <Title level={5} style={UserDetailsStyle.mainStyle}><PhoneOutlined style={UserDetailsStyle.userIconStyle} /> {user.phone}</Title>
                    <Title level={5} style={UserDetailsStyle.mainStyle}><GlobalOutlined style={UserDetailsStyle.userIconStyle} /> http://{user.website}</Title>
                </Space>
            </Card>
        </Col>
    )
}