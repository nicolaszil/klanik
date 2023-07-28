import React from 'react'
import { createOvermind, IContext } from 'overmind'
import { Provider, createStateHook, createActionsHook, createEffectsHook } from 'overmind-react'
import { Children } from '../types'

interface State {}

type Context = IContext<{
  state: typeof initialState;
  actions: typeof actions;
  effects: typeof effects;
}>

const initialState: State = {}

const actions = {}

const effects = {}

const overmind = createOvermind(
  {
    state: initialState,
    actions,
    effects,
  },
  {
    hotReloading: true,
  },
)

export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()
export const useEffects = createEffectsHook()

export const StorageProvider: React.FC<Children> = ({ children }) => (
  <Provider value={overmind}>
    {children}
  </Provider>
)
