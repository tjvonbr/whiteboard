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
      phoneNumber
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
        phoneNumber
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
      score {
        ... on IntScore {
          value
        }
        ... on FloatScore {
          value
        }
        ... on StringScore {
          value
        }
      }
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
        score {
          ... on IntScore {
            value
          }
          ... on FloatScore {
            value
          }
          ... on StringScore {
            value
          }
        }
        completedAt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkoutScore = /* GraphQL */ `
  query GetWorkoutScore($id: ID!) {
    getWorkoutScore(id: $id) {
      id
      scoreId
      user {
        id
        firstName
        lastName
        email
        phoneNumber
        createdAt
        updatedAt
      }
      workoutId {
        id
        routineId
        userId
        name
        notes
        status
        score {
          ... on IntScore {
            value
          }
          ... on FloatScore {
            value
          }
          ... on StringScore {
            value
          }
        }
        completedAt
        createdAt
        updatedAt
      }
      routineId {
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
      score {
        ... on IntScore {
          value
        }
        ... on FloatScore {
          value
        }
        ... on StringScore {
          value
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listWorkoutScores = /* GraphQL */ `
  query ListWorkoutScores(
    $filter: ModelWorkoutScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        scoreId
        user {
          id
          firstName
          lastName
          email
          phoneNumber
          createdAt
          updatedAt
        }
        workoutId {
          id
          routineId
          userId
          name
          notes
          status
          completedAt
          createdAt
          updatedAt
        }
        routineId {
          id
          userId
          name
          description
          workoutType
          scoringType
          createdAt
          updatedAt
        }
        score {
          ... on IntScore {
            value
          }
          ... on FloatScore {
            value
          }
          ... on StringScore {
            value
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
