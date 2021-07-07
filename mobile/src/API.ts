/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateExerciseInput = {
  id?: string | null,
  userId: string,
  name: string,
  description?: string | null,
  equipment?: ExerciseEquipment | null,
};

export enum ExerciseEquipment {
  BARBELL = "BARBELL",
  DUMBBELL = "DUMBBELL",
}


export type ModelExerciseConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  equipment?: ModelExerciseEquipmentInput | null,
  and?: Array< ModelExerciseConditionInput | null > | null,
  or?: Array< ModelExerciseConditionInput | null > | null,
  not?: ModelExerciseConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelExerciseEquipmentInput = {
  eq?: ExerciseEquipment | null,
  ne?: ExerciseEquipment | null,
};

export type Exercise = {
  __typename: "Exercise",
  id?: string,
  userId?: string,
  name?: string,
  description?: string | null,
  equipment?: ExerciseEquipment | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateExerciseInput = {
  id: string,
  userId?: string | null,
  name?: string | null,
  description?: string | null,
  equipment?: ExerciseEquipment | null,
};

export type DeleteExerciseInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phoneNumber?: number | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  phoneNumber?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  phoneNumber?: number | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  password?: string | null,
  phoneNumber?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateWorkoutInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  workoutType: WorkoutType,
  scoringType: ScoringType,
  date: string,
};

export enum WorkoutType {
  CARDIO = "CARDIO",
  STRENGTH = "STRENGTH",
  WARMUP = "WARMUP",
  WOD = "WOD",
}


export enum ScoringType {
  REPS = "REPS",
  ROUNDS = "ROUNDS",
  ROUNDS_PLUS_REPS = "ROUNDS_PLUS_REPS",
  TIME = "TIME",
}


export type ModelWorkoutConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  workoutType?: ModelWorkoutTypeInput | null,
  scoringType?: ModelScoringTypeInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelWorkoutConditionInput | null > | null,
  or?: Array< ModelWorkoutConditionInput | null > | null,
  not?: ModelWorkoutConditionInput | null,
};

export type ModelWorkoutTypeInput = {
  eq?: WorkoutType | null,
  ne?: WorkoutType | null,
};

export type ModelScoringTypeInput = {
  eq?: ScoringType | null,
  ne?: ScoringType | null,
};

export type Workout = {
  __typename: "Workout",
  id?: string,
  name?: string,
  description?: string | null,
  workoutType?: WorkoutType,
  scoringType?: ScoringType,
  exercises?:  Array<Exercise >,
  date?: string,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateWorkoutInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  workoutType?: WorkoutType | null,
  scoringType?: ScoringType | null,
  date?: string | null,
};

export type DeleteWorkoutInput = {
  id: string,
};

export type ModelExerciseFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  equipment?: ModelExerciseEquipmentInput | null,
  and?: Array< ModelExerciseFilterInput | null > | null,
  or?: Array< ModelExerciseFilterInput | null > | null,
  not?: ModelExerciseFilterInput | null,
};

export type ModelExerciseConnection = {
  __typename: "ModelExerciseConnection",
  items?:  Array<Exercise | null > | null,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  phoneNumber?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelWorkoutFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  workoutType?: ModelWorkoutTypeInput | null,
  scoringType?: ModelScoringTypeInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelWorkoutFilterInput | null > | null,
  or?: Array< ModelWorkoutFilterInput | null > | null,
  not?: ModelWorkoutFilterInput | null,
};

export type ModelWorkoutConnection = {
  __typename: "ModelWorkoutConnection",
  items?:  Array<Workout | null > | null,
  nextToken?: string | null,
};

export type CreateExerciseMutationVariables = {
  input?: CreateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type CreateExerciseMutation = {
  createExercise?:  {
    __typename: "Exercise",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    equipment?: ExerciseEquipment | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExerciseMutationVariables = {
  input?: UpdateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type UpdateExerciseMutation = {
  updateExercise?:  {
    __typename: "Exercise",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    equipment?: ExerciseEquipment | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExerciseMutationVariables = {
  input?: DeleteExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type DeleteExerciseMutation = {
  deleteExercise?:  {
    __typename: "Exercise",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    equipment?: ExerciseEquipment | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkoutMutationVariables = {
  input?: CreateWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type CreateWorkoutMutation = {
  createWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      equipment?: ExerciseEquipment | null,
      createdAt: string,
      updatedAt: string,
    } >,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkoutMutationVariables = {
  input?: UpdateWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type UpdateWorkoutMutation = {
  updateWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      equipment?: ExerciseEquipment | null,
      createdAt: string,
      updatedAt: string,
    } >,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkoutMutationVariables = {
  input?: DeleteWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type DeleteWorkoutMutation = {
  deleteWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      equipment?: ExerciseEquipment | null,
      createdAt: string,
      updatedAt: string,
    } >,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetExerciseQueryVariables = {
  id?: string,
};

export type GetExerciseQuery = {
  getExercise?:  {
    __typename: "Exercise",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    equipment?: ExerciseEquipment | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExercisesQuery = {
  listExercises?:  {
    __typename: "ModelExerciseConnection",
    items?:  Array< {
      __typename: "Exercise",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      equipment?: ExerciseEquipment | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      phoneNumber?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetWorkoutQueryVariables = {
  id?: string,
};

export type GetWorkoutQuery = {
  getWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      equipment?: ExerciseEquipment | null,
      createdAt: string,
      updatedAt: string,
    } >,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkoutsQueryVariables = {
  filter?: ModelWorkoutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkoutsQuery = {
  listWorkouts?:  {
    __typename: "ModelWorkoutConnection",
    items?:  Array< {
      __typename: "Workout",
      id: string,
      name: string,
      description?: string | null,
      workoutType: WorkoutType,
      scoringType: ScoringType,
      exercises:  Array< {
        __typename: "Exercise",
        id: string,
        userId: string,
        name: string,
        description?: string | null,
        equipment?: ExerciseEquipment | null,
        createdAt: string,
        updatedAt: string,
      } >,
      date: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateExerciseSubscription = {
  onCreateExercise?:  {
    __typename: "Exercise",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    equipment?: ExerciseEquipment | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExerciseSubscription = {
  onUpdateExercise?:  {
    __typename: "Exercise",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    equipment?: ExerciseEquipment | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExerciseSubscription = {
  onDeleteExercise?:  {
    __typename: "Exercise",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    equipment?: ExerciseEquipment | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkoutSubscription = {
  onCreateWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      equipment?: ExerciseEquipment | null,
      createdAt: string,
      updatedAt: string,
    } >,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkoutSubscription = {
  onUpdateWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      equipment?: ExerciseEquipment | null,
      createdAt: string,
      updatedAt: string,
    } >,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkoutSubscription = {
  onDeleteWorkout?:  {
    __typename: "Workout",
    id: string,
    name: string,
    description?: string | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    exercises:  Array< {
      __typename: "Exercise",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      equipment?: ExerciseEquipment | null,
      createdAt: string,
      updatedAt: string,
    } >,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
