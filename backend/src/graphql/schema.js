import { buildSchema } from 'graphql';
import { SubscriberModel } from '../models/SubscriberModel.js';
import { pool } from '../config/db.js';

const schema = buildSchema(`
  type Subscriber {
    id: ID!
    email: String!
    name: String
    is_active: Boolean
    subscribed_at: String
  }

  type FormSubmission {
    id: ID!
    name: String!
    email: String!
    message: String!
    submitted_at: String
  }

  type Query {
    subscribers: [Subscriber]
    subscriberByEmail(email: String!): Subscriber
    submissions: [FormSubmission]
  }

  input SubscribeInput {
    email: String!
    name: String
  }

  type Mutation {
    subscribe(input: SubscribeInput!): Subscriber
    unsubscribe(email: String!): Subscriber
  }
`);

const root = {
    subscribers: async () => {
        return await SubscriberModel.findAll();
    },
    subscriberByEmail: async ({ email }) => {
        return await SubscriberModel.findByEmail(email);
    },
    submissions: async () => {
        const result = await pool.query('SELECT * FROM form_submissions ORDER BY submitted_at DESC');
        return result.rows;
    },
    subscribe: async ({ input }) => {
        const { email, name } = input;
        const existing = await SubscriberModel.findByEmail(email);
        if (existing) throw new Error('Email already subscribed');
        return await SubscriberModel.create({ email, name });
    },
    unsubscribe: async ({ email }) => {
        const unsub = await SubscriberModel.unsubscribe(email);
        if (!unsub) throw new Error('Email not found');
        return unsub;
    }
};

export { schema, root };
