import { observable } from 'mobx'
import _get from 'lodash/get'
import * as api from './api'

export class AdminStore {
  @observable pending
  @observable error

  register() {
    // this.checkRights();
  }

  checkRights = async () => {
      try {
        await api.checkAdmin()
      } catch (e) {
        this.getRootStore().history.push('/admin/auth')
      }
  }

  adminAuth = async (data) => {
    this.pending = true

    try {
      await api.auth(data)
    } catch (e) {
      this.error = _get(e, 'response.data.error', e.message)
    } finally {
      this.pending = false
    }
  }

  checkSession = async () => {
    this.pending = true

    try {
      await api.checkSession()
    } catch (e) {
      throw e;
    }
    finally {
      this.pending = false
    }
  }
}