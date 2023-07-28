import React from 'react'
import { QueryProvider, StorageProvider } from './providers'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Root } from './components/Root'

export default function App() {
  return (
    <StorageProvider>
      <QueryProvider>
        <SafeAreaProvider>
          <Root />
        </SafeAreaProvider>
      </QueryProvider>
    </StorageProvider>
  )
}
