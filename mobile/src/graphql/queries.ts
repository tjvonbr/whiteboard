/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
      id
      userId
      routine {
        items {
          id
          routineId
          exerciseId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      name
      description
      muscles
      createdAt
      updatedAt
    }
  }
`;
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        routine {
          nextToken
        }
        name
        description
        muscles
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoutine = /* GraphQL */ `
  query GetRoutine($id: ID!) {
    getRoutine(id: $id) {
      id
      userId
      name
      description
      exercises {
        items {
          id
          routineId
          exerciseId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      workoutType
      scoringType
      workouts {
        items {
          id
          routineId
          userId
          name
          notes
          status
          score
          completedAt
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRoutines = /* GraphQL */ `
  query ListRoutines(
    $filter: ModelRoutineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        name
        description
        exercises {
          nextToken
        }
        workoutType
        scoringType
        workouts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      birthday
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        birthday
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
      id
      routineId
      userId
      name
      notes
      status
      score
      completedAt
      createdAt
      updatedAt
    }
  }
`;
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        routineId
        userId
        name
        notes
        status
        score
        completedAt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchRoutines = /* GraphQL */ `
  query SearchRoutines(
    $filter: SearchableRoutineFilterInput
    $sort: SearchableRoutineSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchRoutines(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        userId
        name
        description
        exercises {
          nextToken
        }
        workoutType
        scoringType
        workouts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
