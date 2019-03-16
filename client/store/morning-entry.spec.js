/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {me, logout} from './user'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'
import {postMorningEntry} from './morning-entry'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {user: {}}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('postMorningEntry', () => {
    it('eventually dispatches the GOT MORNING ENTRY action', async () => {
      const fakeEntry = {
        sleep: '0-2',
        social: 'Not at all',
        meals: 3,
        exercise: 'No',
        work: 5,
        relax: 'More than usual',
        sun: 5
      }
      mockAxios.onPost('/api/morning-entries').replyOnce(400, fakeEntry)
      await store.dispatch(postMorningEntry({}))
      const actions = store.getActions()
      console.log(actions)
      expect(actions[0].type).to.be.equal('GOT_MORNING_ENTRY')
      expect(actions[0].entry).to.be.deep.equal(fakeEntry)
    })
  })
})
