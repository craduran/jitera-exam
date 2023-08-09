/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { UserService } from './../../services/user.service';

jest.mock('axios', () => {
    return {
        create: () => {
            return {
                get: () => {
                    const result = {
                      data:{
                      }
                    }
                    return Promise.resolve(result)
                }
            };
        },  
    };
});

beforeAll(() => {
    jest.spyOn(UserService.prototype, 'init').mockImplementation(() => {
    });
});

afterAll(() => {
    jest.restoreAllMocks();
});
describe("Test Apis", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        jest.clearAllMocks();
    });

    describe("init function", () => {
        it('should initialize when an instance is created', () => {
            const userService = new UserService();
            expect(userService.api_url).toEqual("https://jsonplaceholder.typicode.com/");
            expect(userService.init).toHaveBeenCalledTimes(1);
        });
    });

    describe("getUsers function", () => {
        it('should return users',  async () => {
            const userService = new UserService();
            const result = await userService.getUsers();
            expect(JSON.stringify(result)).toBe('{}');
        });
    })


});