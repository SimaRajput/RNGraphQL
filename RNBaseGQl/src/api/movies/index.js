// import gql from 'graphql-tag';
import { gql, useQuery } from '@apollo/client';
import apollo from '../../apollo';
import toPromise from '../../utilities/toPromise';
import {catchError} from '../helper/apiHandler';

const GetMoviesQuery = gql`
  query GetMovies {
    response: GetMovies {
      status
      movies: Movies {
        id
        title
      }
    }
  }
`;

export const getMovie = () =>
  toPromise((resolve, reject) => {
    apollo
      .query({
        query: GetMoviesQuery,
        variables: {},
        fetchPolicy: "no-cache"
      })
      .then(({data}) => {
        const {status} = data.response;
        if (status === 200) {
          resolve(data.response);
        } else {
          const message = status === 401 ? "Invalid request" : "Unknow Error";
          reject(message);
        }
      })
      .catch(reject);
  });



