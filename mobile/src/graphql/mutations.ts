/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
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
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
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
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
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
export const createRoutine = /* GraphQL */ `
  mutation CreateRoutine(
    $input: CreateRoutineInput!
    $condition: ModelRoutineConditionInput
  ) {
    createRoutine(input: $input, condition: $condition) {
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
export const updateRoutine = /* GraphQL */ `
  mutation UpdateRoutine(
    $input: UpdateRoutineInput!
    $condition: ModelRoutineConditionInput
  ) {
    updateRoutine(input: $input, condition: $condition) {
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
export const deleteRoutine = /* GraphQL */ `
  mutation DeleteRoutine(
    $input: DeleteRoutineInput!
    $condition: ModelRoutineConditionInput
  ) {
    deleteRoutine(input: $input, condition: $condition) {
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
export const createRoutineExercise = /* GraphQL */ `
  mutation CreateRoutineExercise(
    $input: CreateRoutineExerciseInput!
    $condition: ModelRoutineExerciseConditionInput
  ) {
    createRoutineExercise(input: $input, condition: $condition) {
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
export const updateRoutineExercise = /* GraphQL */ `
  mutation UpdateRoutineExercise(
    $input: UpdateRoutineExerciseInput!
    $condition: ModelRoutineExerciseConditionInput
  ) {
    updateRoutineExercise(input: $input, condition: $condition) {
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
export const deleteRoutineExercise = /* GraphQL */ `
  mutation DeleteRoutineExercise(
    $input: DeleteRoutineExerciseInput!
    $condition: ModelRoutineExerciseConditionInput
  ) {
    deleteRoutineExercise(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
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
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
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
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
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
export const createWorkoutScore = /* GraphQL */ `
  mutation CreateWorkoutScore(
    $input: CreateWorkoutScoreInput!
    $condition: ModelWorkoutScoreConditionInput
  ) {
    createWorkoutScore(input: $input, condition: $condition) {
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
export const updateWorkoutScore = /* GraphQL */ `
  mutation UpdateWorkoutScore(
    $input: UpdateWorkoutScoreInput!
    $condition: ModelWorkoutScoreConditionInput
  ) {
    updateWorkoutScore(input: $input, condition: $condition) {
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
export const deleteWorkoutScore = /* GraphQL */ `
  mutation DeleteWorkoutScore(
    $input: DeleteWorkoutScoreInput!
    $condition: ModelWorkoutScoreConditionInput
  ) {
    deleteWorkoutScore(input: $input, condition: $condition) {
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
