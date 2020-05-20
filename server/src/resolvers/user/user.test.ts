import { Connection } from 'typeorm';
import { User } from '../../entity/user';
import { createSchema } from '../../schema/create-schema';
import faker from 'faker';
import { graphql } from 'graphql';
import { initializeConnection } from '../../utilities/connection/initialize-connection';

let connection: Connection;

beforeAll(async () => {
  connection = await initializeConnection();
});

afterAll(async () => {
  if (connection) await connection.close();
});

describe('Create User', () => {
  it('should create a user', async () => {
    const schema = await createSchema();

    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    const mutation = `
      mutation {
        userCreate (
          data: {
            username: "${username}"
            email: "${email}"
            password: "${password}"
          }
        ) {
          id
          username
          email
        }
      }
    `;

    const gqlResult = await graphql({ schema, source: mutation });
    expect(gqlResult).toEqual({
      data: {
        userCreate: {
          id: expect.any(String),
          username: username,
          email: email
        }
      }
    });

    const dbResult = await User.findOne({ email });
    expect(dbResult).toBeDefined();
    expect(dbResult!.username).toBe(username);
    expect(dbResult!.password).toBeDefined();
    expect(dbResult!.archived).toBe(false);
  });

  it('should return error with message \'Cannot query field "password"\' when querying for password', async () => {
    const schema = await createSchema();

    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    const mutation = `
      mutation {
        userCreate (
          data: {
            username: "${username}"
            email: "${email}"
            password: "${password}"
          }
        ) {
          id
          username
          email
          password
        }
      }
    `;

    const result = await graphql({ schema, source: mutation });
    expect(result.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          message: expect.stringMatching(/cannot.*query.*"password"/gim)
        })
      ])
    );
  });
});
