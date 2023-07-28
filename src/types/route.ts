import { RouteNames } from '../constants/routes'

export type RootStackParamList = {
  Questions: {
    screen?: keyof typeof RouteNames
  } | undefined,
}

export type NavStackParamList = {
  NavQuestions: undefined
}
