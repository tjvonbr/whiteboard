/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRoutineExerciseInput = {
  id?: string | null,
  routineId: string,
  exerciseId: string,
};

export type RoutineExercise = {
  __typename: "RoutineExercise",
  id?: string,
  routineId?: string,
  exerciseId?: string,
  routine?: Routine,
  exercise?: Exercise,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type Routine = {
  __typename: "Routine",
  id?: string,
  userId?: string,
  name?: string,
  description?: string | null,
  exercises?: ModelRoutineExerciseConnection,
  workoutType?: WorkoutType,
  scoringType?: ScoringType,
  workouts?: ModelWorkoutConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelRoutineExerciseConnection = {
  __typename: "ModelRoutineExerciseConnection",
  items?:  Array<RoutineExercise | null > | null,
  nextToken?: string | null,
};

export enum WorkoutType {
  AMRAP = "AMRAP",
  CHIPPER = "CHIPPER",
  EMOM = "EMOM",
  LADDER = "LADDER",
  RFT = "RFT",
  STRENGTH = "STRENGTH",
  TABATA = "TABATA",
}


export enum ScoringType {
  MAX = "MAX",
  NO_SCORE = "NO_SCORE",
  ROUNDS = "ROUNDS",
  ROUNDS_PLUS_REPS = "ROUNDS_PLUS_REPS",
  SLOWEST_SET = "SLOWEST_SET",
  TIME = "TIME",
  WEIGHT = "WEIGHT",
}


export type ModelWorkoutConnection = {
  __typename: "ModelWorkoutConnection",
  items?:  Array<Workout | null > | null,
  nextToken?: string | null,
};

export type Workout = {
  __typename: "Workout",
  id?: string,
  routineId?: string,
  userId?: string,
  name?: string,
  notes?: string | null,
  status?: WorkoutStatus | null,
  score?: string | null,
  completedAt?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export enum WorkoutStatus {
  COMPLETE = "COMPLETE",
  INCOMPLETE = "INCOMPLETE",
}


export type Exercise = {
  __typename: "Exercise",
  id?: string,
  userId?: string,
  routine?: ModelRoutineExerciseConnection,
  name?: string,
  description?: string | null,
  muscles?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type CreateExerciseInput = {
  id?: string | null,
  userId: string,
  name: string,
  description?: string | null,
  muscles?: string | null,
};

export type ModelExerciseConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  muscles?: ModelStringInput | null,
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

export type UpdateExerciseInput = {
  id: string,
  userId?: string | null,
  name?: string | null,
  description?: string | null,
  muscles?: string | null,
};

export type DeleteExerciseInput = {
  id: string,
};

export type CreateRoutineInput = {
  id?: string | null,
  userId: string,
  name: string,
  description?: string | null,
  workoutType: WorkoutType,
  scoringType: ScoringType,
};

export type ModelRoutineConditionInput = {
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  workoutType?: ModelWorkoutTypeInput | null,
  scoringType?: ModelScoringTypeInput | null,
  and?: Array< ModelRoutineConditionInput | null > | null,
  or?: Array< ModelRoutineConditionInput | null > | null,
  not?: ModelRoutineConditionInput | null,
};

export type ModelWorkoutTypeInput = {
  eq?: WorkoutType | null,
  ne?: WorkoutType | null,
};

export type ModelScoringTypeInput = {
  eq?: ScoringType | null,
  ne?: ScoringType | null,
};

export type UpdateRoutineInput = {
  id: string,
  userId?: string | null,
  name?: string | null,
  description?: string | null,
  workoutType?: WorkoutType | null,
  scoringType?: ScoringType | null,
};

export type DeleteRoutineInput = {
  id: string,
};

export type ModelRoutineExerciseConditionInput = {
  routineId?: ModelIDInput | null,
  exerciseId?: ModelIDInput | null,
  and?: Array< ModelRoutineExerciseConditionInput | null > | null,
  or?: Array< ModelRoutineExerciseConditionInput | null > | null,
  not?: ModelRoutineExerciseConditionInput | null,
};

export type UpdateRoutineExerciseInput = {
  id: string,
  routineId?: string | null,
  exerciseId?: string | null,
};

export type DeleteRoutineExerciseInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName?: string | null,
  email: string,
  birthday?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id?: string,
  firstName?: string,
  lastName?: string | null,
  email?: string,
  birthday?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  birthday?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateWorkoutInput = {
  id?: string | null,
  routineId: string,
  userId: string,
  name: string,
  notes?: string | null,
  status?: WorkoutStatus | null,
  score?: string | null,
  completedAt?: string | null,
};

export type ModelWorkoutConditionInput = {
  routineId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  status?: ModelWorkoutStatusInput | null,
  score?: ModelStringInput | null,
  completedAt?: ModelStringInput | null,
  and?: Array< ModelWorkoutConditionInput | null > | null,
  or?: Array< ModelWorkoutConditionInput | null > | null,
  not?: ModelWorkoutConditionInput | null,
};

export type ModelWorkoutStatusInput = {
  eq?: WorkoutStatus | null,
  ne?: WorkoutStatus | null,
};

export type UpdateWorkoutInput = {
  id: string,
  routineId?: string | null,
  userId?: string | null,
  name?: string | null,
  notes?: string | null,
  status?: WorkoutStatus | null,
  score?: string | null,
  completedAt?: string | null,
};

export type DeleteWorkoutInput = {
  id: string,
};

export type ModelExerciseFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  muscles?: ModelStringInput | null,
  and?: Array< ModelExerciseFilterInput | null > | null,
  or?: Array< ModelExerciseFilterInput | null > | null,
  not?: ModelExerciseFilterInput | null,
};

export type ModelExerciseConnection = {
  __typename: "ModelExerciseConnection",
  items?:  Array<Exercise | null > | null,
  nextToken?: string | null,
};

export type ModelRoutineFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  workoutType?: ModelWorkoutTypeInput | null,
  scoringType?: ModelScoringTypeInput | null,
  and?: Array< ModelRoutineFilterInput | null > | null,
  or?: Array< ModelRoutineFilterInput | null > | null,
  not?: ModelRoutineFilterInput | null,
};

export type ModelRoutineConnection = {
  __typename: "ModelRoutineConnection",
  items?:  Array<Routine | null > | null,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
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
  routineId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  status?: ModelWorkoutStatusInput | null,
  score?: ModelStringInput | null,
  completedAt?: ModelStringInput | null,
  and?: Array< ModelWorkoutFilterInput | null > | null,
  or?: Array< ModelWorkoutFilterInput | null > | null,
  not?: ModelWorkoutFilterInput | null,
};

export type SearchableRoutineFilterInput = {
  id?: SearchableIDFilterInput | null,
  userId?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  and?: Array< SearchableRoutineFilterInput | null > | null,
  or?: Array< SearchableRoutineFilterInput | null > | null,
  not?: SearchableRoutineFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableRoutineSortInput = {
  field?: SearchableRoutineSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableRoutineSortableFields {
  id = "id",
  userId = "userId",
  name = "name",
  description = "description",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableRoutineConnection = {
  __typename: "SearchableRoutineConnection",
  items?:  Array<Routine | null > | null,
  nextToken?: string | null,
  total?: number | null,
};

export type BatchAddMutationVariables = {
  exercises?: Array< CreateRoutineExerciseInput | null > | null,
};

export type BatchAddMutation = {
  batchAdd?:  Array< {
    __typename: "RoutineExercise",
    id: string,
    routineId: string,
    exerciseId: string,
    routine:  {
      __typename: "Routine",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      exercises?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      workoutType: WorkoutType,
      scoringType: ScoringType,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    exercise:  {
      __typename: "Exercise",
      id: string,
      userId: string,
      routine?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      description?: string | null,
      muscles?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null > | null,
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
    routine?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    description?: string | null,
    muscles?: string | null,
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
    routine?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    description?: string | null,
    muscles?: string | null,
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
    routine?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    description?: string | null,
    muscles?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoutineMutationVariables = {
  input?: CreateRoutineInput,
  condition?: ModelRoutineConditionInput | null,
};

export type CreateRoutineMutation = {
  createRoutine?:  {
    __typename: "Routine",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    exercises?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        routineId: string,
        userId: string,
        name: string,
        notes?: string | null,
        status?: WorkoutStatus | null,
        score?: string | null,
        completedAt?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoutineMutationVariables = {
  input?: UpdateRoutineInput,
  condition?: ModelRoutineConditionInput | null,
};

export type UpdateRoutineMutation = {
  updateRoutine?:  {
    __typename: "Routine",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    exercises?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        routineId: string,
        userId: string,
        name: string,
        notes?: string | null,
        status?: WorkoutStatus | null,
        score?: string | null,
        completedAt?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoutineMutationVariables = {
  input?: DeleteRoutineInput,
  condition?: ModelRoutineConditionInput | null,
};

export type DeleteRoutineMutation = {
  deleteRoutine?:  {
    __typename: "Routine",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    exercises?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        routineId: string,
        userId: string,
        name: string,
        notes?: string | null,
        status?: WorkoutStatus | null,
        score?: string | null,
        completedAt?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoutineExerciseMutationVariables = {
  input?: CreateRoutineExerciseInput,
  condition?: ModelRoutineExerciseConditionInput | null,
};

export type CreateRoutineExerciseMutation = {
  createRoutineExercise?:  {
    __typename: "RoutineExercise",
    id: string,
    routineId: string,
    exerciseId: string,
    routine:  {
      __typename: "Routine",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      exercises?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      workoutType: WorkoutType,
      scoringType: ScoringType,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    exercise:  {
      __typename: "Exercise",
      id: string,
      userId: string,
      routine?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      description?: string | null,
      muscles?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateRoutineExerciseMutationVariables = {
  input?: UpdateRoutineExerciseInput,
  condition?: ModelRoutineExerciseConditionInput | null,
};

export type UpdateRoutineExerciseMutation = {
  updateRoutineExercise?:  {
    __typename: "RoutineExercise",
    id: string,
    routineId: string,
    exerciseId: string,
    routine:  {
      __typename: "Routine",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      exercises?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      workoutType: WorkoutType,
      scoringType: ScoringType,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    exercise:  {
      __typename: "Exercise",
      id: string,
      userId: string,
      routine?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      description?: string | null,
      muscles?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteRoutineExerciseMutationVariables = {
  input?: DeleteRoutineExerciseInput,
  condition?: ModelRoutineExerciseConditionInput | null,
};

export type DeleteRoutineExerciseMutation = {
  deleteRoutineExercise?:  {
    __typename: "RoutineExercise",
    id: string,
    routineId: string,
    exerciseId: string,
    routine:  {
      __typename: "Routine",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      exercises?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      workoutType: WorkoutType,
      scoringType: ScoringType,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    exercise:  {
      __typename: "Exercise",
      id: string,
      userId: string,
      routine?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      description?: string | null,
      muscles?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    lastName?: string | null,
    email: string,
    birthday?: string | null,
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
    lastName?: string | null,
    email: string,
    birthday?: string | null,
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
    lastName?: string | null,
    email: string,
    birthday?: string | null,
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
    routineId: string,
    userId: string,
    name: string,
    notes?: string | null,
    status?: WorkoutStatus | null,
    score?: string | null,
    completedAt?: string | null,
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
    routineId: string,
    userId: string,
    name: string,
    notes?: string | null,
    status?: WorkoutStatus | null,
    score?: string | null,
    completedAt?: string | null,
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
    routineId: string,
    userId: string,
    name: string,
    notes?: string | null,
    status?: WorkoutStatus | null,
    score?: string | null,
    completedAt?: string | null,
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
    routine?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    description?: string | null,
    muscles?: string | null,
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
      routine?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      description?: string | null,
      muscles?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRoutineQueryVariables = {
  id?: string,
};

export type GetRoutineQuery = {
  getRoutine?:  {
    __typename: "Routine",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    exercises?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        routineId: string,
        userId: string,
        name: string,
        notes?: string | null,
        status?: WorkoutStatus | null,
        score?: string | null,
        completedAt?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoutinesQueryVariables = {
  filter?: ModelRoutineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoutinesQuery = {
  listRoutines?:  {
    __typename: "ModelRoutineConnection",
    items?:  Array< {
      __typename: "Routine",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      exercises?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      workoutType: WorkoutType,
      scoringType: ScoringType,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
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
    lastName?: string | null,
    email: string,
    birthday?: string | null,
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
      lastName?: string | null,
      email: string,
      birthday?: string | null,
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
    routineId: string,
    userId: string,
    name: string,
    notes?: string | null,
    status?: WorkoutStatus | null,
    score?: string | null,
    completedAt?: string | null,
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
      routineId: string,
      userId: string,
      name: string,
      notes?: string | null,
      status?: WorkoutStatus | null,
      score?: string | null,
      completedAt?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type SearchRoutinesQueryVariables = {
  filter?: SearchableRoutineFilterInput | null,
  sort?: SearchableRoutineSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchRoutinesQuery = {
  searchRoutines?:  {
    __typename: "SearchableRoutineConnection",
    items?:  Array< {
      __typename: "Routine",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      exercises?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      workoutType: WorkoutType,
      scoringType: ScoringType,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    total?: number | null,
  } | null,
};

export type OnCreateExerciseSubscription = {
  onCreateExercise?:  {
    __typename: "Exercise",
    id: string,
    userId: string,
    routine?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    description?: string | null,
    muscles?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExerciseSubscription = {
  onUpdateExercise?:  {
    __typename: "Exercise",
    id: string,
    userId: string,
    routine?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    description?: string | null,
    muscles?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExerciseSubscription = {
  onDeleteExercise?:  {
    __typename: "Exercise",
    id: string,
    userId: string,
    routine?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    description?: string | null,
    muscles?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoutineSubscription = {
  onCreateRoutine?:  {
    __typename: "Routine",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    exercises?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        routineId: string,
        userId: string,
        name: string,
        notes?: string | null,
        status?: WorkoutStatus | null,
        score?: string | null,
        completedAt?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoutineSubscription = {
  onUpdateRoutine?:  {
    __typename: "Routine",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    exercises?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        routineId: string,
        userId: string,
        name: string,
        notes?: string | null,
        status?: WorkoutStatus | null,
        score?: string | null,
        completedAt?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoutineSubscription = {
  onDeleteRoutine?:  {
    __typename: "Routine",
    id: string,
    userId: string,
    name: string,
    description?: string | null,
    exercises?:  {
      __typename: "ModelRoutineExerciseConnection",
      items?:  Array< {
        __typename: "RoutineExercise",
        id: string,
        routineId: string,
        exerciseId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    workoutType: WorkoutType,
    scoringType: ScoringType,
    workouts?:  {
      __typename: "ModelWorkoutConnection",
      items?:  Array< {
        __typename: "Workout",
        id: string,
        routineId: string,
        userId: string,
        name: string,
        notes?: string | null,
        status?: WorkoutStatus | null,
        score?: string | null,
        completedAt?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoutineExerciseSubscriptionVariables = {
  owner?: string,
};

export type OnCreateRoutineExerciseSubscription = {
  onCreateRoutineExercise?:  {
    __typename: "RoutineExercise",
    id: string,
    routineId: string,
    exerciseId: string,
    routine:  {
      __typename: "Routine",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      exercises?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      workoutType: WorkoutType,
      scoringType: ScoringType,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    exercise:  {
      __typename: "Exercise",
      id: string,
      userId: string,
      routine?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      description?: string | null,
      muscles?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateRoutineExerciseSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateRoutineExerciseSubscription = {
  onUpdateRoutineExercise?:  {
    __typename: "RoutineExercise",
    id: string,
    routineId: string,
    exerciseId: string,
    routine:  {
      __typename: "Routine",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      exercises?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      workoutType: WorkoutType,
      scoringType: ScoringType,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    exercise:  {
      __typename: "Exercise",
      id: string,
      userId: string,
      routine?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      description?: string | null,
      muscles?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteRoutineExerciseSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteRoutineExerciseSubscription = {
  onDeleteRoutineExercise?:  {
    __typename: "RoutineExercise",
    id: string,
    routineId: string,
    exerciseId: string,
    routine:  {
      __typename: "Routine",
      id: string,
      userId: string,
      name: string,
      description?: string | null,
      exercises?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      workoutType: WorkoutType,
      scoringType: ScoringType,
      workouts?:  {
        __typename: "ModelWorkoutConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    exercise:  {
      __typename: "Exercise",
      id: string,
      userId: string,
      routine?:  {
        __typename: "ModelRoutineExerciseConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      description?: string | null,
      muscles?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    email: string,
    birthday?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    email: string,
    birthday?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName?: string | null,
    email: string,
    birthday?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkoutSubscription = {
  onCreateWorkout?:  {
    __typename: "Workout",
    id: string,
    routineId: string,
    userId: string,
    name: string,
    notes?: string | null,
    status?: WorkoutStatus | null,
    score?: string | null,
    completedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkoutSubscription = {
  onUpdateWorkout?:  {
    __typename: "Workout",
    id: string,
    routineId: string,
    userId: string,
    name: string,
    notes?: string | null,
    status?: WorkoutStatus | null,
    score?: string | null,
    completedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkoutSubscription = {
  onDeleteWorkout?:  {
    __typename: "Workout",
    id: string,
    routineId: string,
    userId: string,
    name: string,
    notes?: string | null,
    status?: WorkoutStatus | null,
    score?: string | null,
    completedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
