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
          createdAt
          completedAt
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
          createdAt
          completedAt
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
          createdAt
          completedAt
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
  subscription OnCreateRoutineExercise($owner: String!) {
    onCreateRoutineExercise(owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateRoutineExercise = /* GraphQL */ `
  subscription OnUpdateRoutineExercise($owner: String!) {
    onUpdateRoutineExercise(owner: $owner) {
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
      owner
    }
  }
`;
export const onDeleteRoutineExercise = /* GraphQL */ `
  subscription OnDeleteRoutineExercise($owner: String!) {
    onDeleteRoutineExercise(owner: $owner) {
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
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout {
    onCreateWorkout {
      id
      routineId
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
      userId
      name
      notes
      status
      score
      createdAt
      completedAt
      updatedAt
    }
  }
`;
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout {
    onUpdateWorkout {
      id
      routineId
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
      userId
      name
      notes
      status
      score
      createdAt
      completedAt
      updatedAt
    }
  }
`;
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout {
    onDeleteWorkout {
      id
      routineId
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
      userId
      name
      notes
      status
      score
      createdAt
      completedAt
      updatedAt
    }
  }
`;
