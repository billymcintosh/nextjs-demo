import { GetState, SetState } from 'zustand'
import { MyState } from './useStore'

export interface VolleyballStore {
  volleyballEvents: unknown;
}

const createVolleyballStore = (set: SetState<MyState>, get: GetState<MyState>) => ({
  volleyballEvents: [{ 'endDate': '2022-01-01', 'environment': 'Snow', 'externalId': 27420, 'id': 15, 'startDate': '1900-01-01', 'tournamentName': 'Snow Volleyball World Tour - Kronplatz/Plan de Corones', 'year': 1900 }, { 'endDate': '2050-11-01', 'environment': 'Indoor', 'externalId': 23560, 'id': 3, 'startDate': '2010-03-01', 'tournamentName': 'TEST Competition', 'year': 2050 }, { 'endDate': '2050-11-01', 'environment': 'Snow', 'externalId': 22157, 'id': 35, 'startDate': '2010-03-01', 'tournamentName': 'TEST Competition', 'year': 2050 }, { 'endDate': '2050-11-01', 'environment': 'Indoor', 'externalId': 38024, 'id': 225, 'startDate': '2010-03-01', 'tournamentName': 'Test on SE Competition', 'year': 2050 }, { 'endDate': '2021-12-31', 'environment': 'Snow', 'externalId': 28888, 'id': 8, 'startDate': '2021-01-20', 'tournamentName': '2021 Test Competition', 'year': 2021 }, { 'endDate': '2021-12-24', 'environment': 'Beach', 'externalId': 36964, 'id': 26, 'startDate': '2021-06-24', 'tournamentName': 'Test Beach competition', 'year': 2021 }, { 'endDate': '2021-12-24', 'environment': 'Snow', 'externalId': 36965, 'id': 25, 'startDate': '2021-06-24', 'tournamentName': 'Test Snow competition', 'year': 2021 }],
})

export default createVolleyballStore
