import { create } from 'zustand'

interface RepositoryFilters {
  searchQuery: string
  itemsPerPage: number
  isForward: boolean
  after: string | null
  before: string | null
}

const initialFilters: RepositoryFilters = {
  searchQuery: '',
  itemsPerPage: 10,
  isForward: true,
  after: null,
  before: null,
}

export const repositoryFiltersStore = create<{
  filters: RepositoryFilters
  setFilter: <K extends keyof RepositoryFilters>(key: K, value: RepositoryFilters[K]) => void
}>((set) => ({
  filters: initialFilters,
  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),
}))
