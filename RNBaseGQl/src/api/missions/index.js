import gql from 'graphql-tag';
// import { gql, useQuery } from '@apollo/client';
import apollo from '../../apollo';
import toPromise from '../../utilities/toPromise';

const GetMissionsQuery = gql`
  query {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
}
`;

export const GetMission = () =>
  toPromise((resolve, reject) => {
    console.log('resolve', resolve)
    apollo
      .query({
        query: GetMissionsQuery,
        variables: {},
        fetchPolicy: 'no-cache',
      })
      .then(({ data }) => {
        if (data.launchesPast) {
          resolve(data.launchesPast);
        } else {
          reject('Invalid Request');
        }
      })
      .catch(reject);
  });
