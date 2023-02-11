import {helloWorld} from '../testF';

describe('Testing first function',()=>{
    test('helloWorldFunction',()=>{
        expect(helloWorld()).toBe('hello world');
    })    
})


