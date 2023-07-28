import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Children } from '../types'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
})

export const QueryProvider: React.FC<Children> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
