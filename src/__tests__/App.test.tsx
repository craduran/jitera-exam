/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount } from 'enzyme';
import App from './../App';
import { AxiosResponse } from 'axios';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { expect as chaiexpect } from 'chai';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user.interface';


jest.mock("../services/user.service");

const mockError = { message: 'Something Bad Happened' };

describe("App Component", () => {
  beforeAll(() => {
    console.error = jest.fn();
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Renders users grid", async () => {

    const mAxiosResponse = {
      data: [
        {
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
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        }],
    } as AxiosResponse;

    jest.spyOn(UserService.prototype, 'getUsers').mockResolvedValueOnce(mAxiosResponse.data);

    const setStateMock = jest.fn();
    const useStateMock: any = (useState: User[]) => [useState, setStateMock];
    let wrapper;

    await act(async () => {
      wrapper = mount(<App />);
    })

    wrapper.update();
    chaiexpect(wrapper.find('.ant-col')).to.have.length(2); //check if it renders 2 user data
  })


  it("doesn't render users when api fails", async () => {

    jest.spyOn(UserService.prototype, 'getUsers').mockRejectedValue(async () => {
      return () => Promise.reject(mockError);
    });

    const setStateMock = jest.fn();
    const useStateMock: any = (useState: User[]) => [useState, setStateMock];
    let wrapper;

    await act(async () => {
      wrapper = mount(<App />);
    })
    
    wrapper.update();
    chaiexpect(wrapper.find('.ant-col')).to.have.length(0); //check if it renders no user data
  })
});