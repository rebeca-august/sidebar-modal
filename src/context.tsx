import React, { useState, useContext, ReactNode } from 'react'

type State = {
  isSidebarOpen: boolean
  isModalOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
  openModal: () => void
  closeModal: () => void
}

const AppContext = React.createContext<State>({} as State)

type Props = {
  children: ReactNode
}

const AppProvider = ({ children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }

export const useGlobalContext = () => {
  return useContext(AppContext)
}
