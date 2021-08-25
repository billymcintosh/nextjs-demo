import create from 'zustand'

import createTableTennisStore, { TableTennisStore } from './createTableTennisStore'
import createVolleyballStore, { VolleyballStore } from './createVolleyballStore'

export type MyState = TableTennisStore & VolleyballStore & { events: any };

const useStore = create<MyState>((set, get) => {
  const tableTennisStore = createTableTennisStore(set, get)
  const volleyballStore = createVolleyballStore(set, get)
  return ({
    ...tableTennisStore,
    ...volleyballStore,
    events: {
      volleyball: volleyballStore.volleyballEvents,
      tabletennis: tableTennisStore.tableTennisEvents
    }
  })
})

export default useStore
