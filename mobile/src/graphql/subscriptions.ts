/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise {
    onCreateExercise {
      id
      name
      description
      equipment
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise {
    onUpdateExercise {
      id
      name
      description
      equipment
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise {
    onDeleteExercise {
      id
      name
      description
      equipment
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout {
    onCreateWorkout {
      id
      name
      description
      workoutType
      scoringType
      exercises {
        id
        name
        description
        equipment
        createdAt
        updatedAt
      }
      date
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout {
    onUpdateWorkout {
      id
      name
      description
      workoutType
      scoringType
      exercises {
        id
        name
        description
        equipment
        createdAt
        updatedAt
      }
      date
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout {
    onDeleteWorkout {
      id
      name
      description
      workoutType
      scoringType
      exercises {
        id
        name
        description
        equipment
        createdAt
        updatedAt
      }
      date
      createdAt
      updatedAt
    }
  }
`;
