export enum NavRouteNames {
  NavQuestions = 'NavQuestions',
}

export enum MainRouteNames {
  Questions = 'Questions', 
}

export const RouteNames = {
  ...NavRouteNames,
  ...MainRouteNames
}

export const RouteLabels = {
  [NavRouteNames.NavQuestions]: 'Questions',
}
