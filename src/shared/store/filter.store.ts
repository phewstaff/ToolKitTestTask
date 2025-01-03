import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type FilterState<T> = {
  filters: T
  setFilter: <K extends keyof T>(key: K, value: T[K]) => void
  resetFilters: () => void
}

export const createFilterStore = <T>(initialState: T, storeName: string) => {
  return create<FilterState<T>>()(
    devtools(
      persist(
        (set) => ({
          filters: initialState,
          setFilter: (key, value) =>
            set((state) => ({
              filters: {
                ...state.filters,
                [key]: value,
              },
            })),
          resetFilters: () => set({ filters: initialState }),
        }),
        {
          name: `${storeName}-filters`,
        },
      ),
    ),
  )
}
