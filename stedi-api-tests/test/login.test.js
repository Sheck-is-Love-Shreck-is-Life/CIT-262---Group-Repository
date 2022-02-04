import assert from 'assert';
import login from '../utils/login.mjs'

it("Login API should return a valid login token",async ()=>{

    const loginToken = await login({userName:"farris.dave2@gmail.com", password: "YoMam@1"});

    assert.equal(loginToken.length,36);

});