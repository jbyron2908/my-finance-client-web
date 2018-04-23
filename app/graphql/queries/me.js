import gql from 'graphql-tag';
import { query } from '../client/apolloClient';

const queryGQL = gql`
    {
        me {
            id
            email
        }
    }
`;

const meQuery = () => query(queryGQL);

export default meQuery;
