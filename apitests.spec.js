import { test, expect } from '@playwright/test';
import { request } from '@playwright/test';

const USER = 'api/users?page=2?';
const CREATEUSER = 'api/users';
const UPDATEUSER = 'api/users/2';


test('Test List Users', async () => {

  const context = await request.newContext({
    baseURL: 'https://reqres.in',
  });
  const newIssue = await context.get(`/${USER}`);
  expect(newIssue.ok()).toBeTruthy();
 
});


test('Test Create User', async () => {

  const context = await request.newContext({
    baseURL: 'https://reqres.in',
  });
  const newIssue = await context.post(`/${CREATEUSER}`, {
    data: {
      name: 'morpheus',
      job: 'leader',
    }
  });
  const resBody=JSON.parse(await newIssue.text())
  console.log(resBody);
  expect(newIssue.ok()).toBeTruthy();
  expect(resBody.name).toBe('morpheus');
  expect(resBody.job).toBe('leader');
 
});


test('Test Update User', async () => {

  const context = await request.newContext({
    baseURL: 'https://reqres.in',
  });
  const newIssue = await context.put(`/${UPDATEUSER}`, {
    data: {
      name: 'morpheus',
      job: 'zion resident',
    }
  });
  const resBody=JSON.parse(await newIssue.text())
  console.log(resBody);
  expect(newIssue.ok()).toBeTruthy();
  expect(resBody.name).toBe('morpheus');
  expect(resBody.job).toBe('zion resident');
});


