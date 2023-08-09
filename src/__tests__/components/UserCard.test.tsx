/**
 * @jest-environment jsdom
 */
import { shallow, mount } from 'enzyme';
import { expect as chaiexpect } from 'chai';
import { UserCard } from '../../components/UserCard';
import React from 'react';
import { Card, Space } from 'antd';

describe("User card renders", () => {

    it('renders without crashing', () => {
        const mockUser = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            },
            "avatar": "https://avatars.dicebear.com/v2/avataaars/Bret.svg?options%5Bmood%5D%5B%5D=happy"
        }

        const component = shallow(<UserCard user={mockUser} />);
        expect(component.find(Card).exists()).toBe(true);
        expect(component.find(Space).first().contains("Leanne Graham")).toBe(true);
        expect(component.find(Space).childAt(1).contains("Sincere@april.biz")).toBe(true);
        expect(component.find(Space).childAt(2).contains("1-770-736-8031 x56442")).toBe(true);
        expect(component.find(Space).childAt(3).contains("hildegard.org")).toBe(true);
        chaiexpect(component.find(Space).children()).to.have.lengthOf(4);
    });
})