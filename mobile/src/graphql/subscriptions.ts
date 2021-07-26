/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise {
    onCreateExercise {
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
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise {
    onUpdateExercise {
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
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise {
    onDeleteExercise {
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
export const onCreateRoutine = /* GraphQL */ `
  subscription OnCreateRoutine {
    onCreateRoutine {
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
export const onUpdateRoutine = /* GraphQL */ `
  subscription OnUpdateRoutine {
    onUpdateRoutine {
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
export const onDeleteRoutine = /* GraphQL */ `
  subscription OnDeleteRoutine {
    onDeleteRoutine {
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
export const onCreateRoutineExercise = /* GraphQL */ `
  subscription OnCreateRoutineExercise {
    onCreateRoutineExercise {
      id
      routineId
      exerciseId
      routine {
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
      exercise {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRoutineExercise = /* GraphQL */ `
  subscription OnUpdateRoutineExercise {
    onUpdateRoutineExercise {
      id
      routineId
      exerciseId
      routine {
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
      exercise {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRoutineExercise = /* GraphQL */ `
  subscription OnDeleteRoutineExercise {
    onDeleteRoutineExercise {
      id
      routineId
      exerciseId
      routine {
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
      exercise {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      userId
      firstName
      lastName
      email
      phoneNumber
      birthday
      height
      weight
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      userId
      firstName
      lastName
      email
      phoneNumber
      birthday
      height
      weight
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      userId
      firstName
      lastName
      email
      phoneNumber
      birthday
      height
      weight
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout {
    onCreateWorkout {
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
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout {
    onUpdateWorkout {
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
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout {
    onDeleteWorkout {
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
export const onCreateWorkoutScore = /* GraphQL */ `
  subscription OnCreateWorkoutScore {
    onCreateWorkoutScore {
      id
      scoreId
      user {
        id
        userId
        firstName
        lastName
        email
        phoneNumber
        birthday
        height
        weight
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
export const onUpdateWorkoutScore = /* GraphQL */ `
  subscription OnUpdateWorkoutScore {
    onUpdateWorkoutScore {
      id
      scoreId
      user {
        id
        userId
        firstName
        lastName
        email
        phoneNumber
        birthday
        height
        weight
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
export const onDeleteWorkoutScore = /* GraphQL */ `
  subscription OnDeleteWorkoutScore {
    onDeleteWorkoutScore {
      id
      scoreId
      user {
        id
        userId
        firstName
        lastName
        email
        phoneNumber
        birthday
        height
        weight
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
