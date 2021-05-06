// import gql from 'graphql-tag';
import { gql, useQuery } from '@apollo/client';
import apollo from '../../apollo';
import toPromise from '../../utilities/toPromise';
import {catchError} from '../helper/apiHandler';

const GetMoviesQuery = gql`
  query GetMovies {
      movies: movies {
        id
        title
      }
    
  }
`;

export const getMovie = () =>
  toPromise((resolve, reject) => {
    console.log('resolve',resolve)
    apollo
      .query({
        query: GetMoviesQuery,
        variables: {},
        fetchPolicy: "no-cache"
      })
      .then(({data}) => {
        // const {status} = data.response;
        console.log('data',data)
        // if (status === 200) {
          resolve(data);
        // } 
        // else {
        //   const message = status === 401 ? "Invalid request" : "Unknow Error";
          reject('Invalid Request');
        // }
      })
      .catch(reject);
  });



