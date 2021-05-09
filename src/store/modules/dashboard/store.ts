import store from '@/store'
import { login, checkLogin, logout, getUserList, getDashboardUser } from '@/api/user-api'
import { DashboardStoreState } from './type'
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { cloneDeep } from 'lodash'
import { TEST_TABLE_DATA } from './mock'

@Module({ dynamic: true, store, name: 'dashboardStore', namespaced: true })
class DashboardStore extends VuexModule implements DashboardStoreState {
  public dashboardList = []
  public dashboardListTotalCount = 0
  public dashboardToday

  @Mutation
  private SET_CHANGE_VALUE(payload: { key: string; value: any }) {
    const { key, value } = payload
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      ;(this as any)[key] = value
    }
  }

  @Action({ rawError: true })
  public ChangeValue(payload: { key: string; value: any }) {
    this.SET_CHANGE_VALUE(payload)
  }

  @Action({ rawError: true })
  public GetDashboardData(payload: any) {
    const page = payload.page
    const limit = payload.limit
    const dataList2 = cloneDeep(TEST_TABLE_DATA)
    let count = 1
    const dataList = dataList2.map(item => {
      item.hosType = item.hosType + count++
      return { ...item }
    })
    const pageList = dataList.filter((_, index) => index < (limit as number) * (page as number) && index >= (limit as number) * ((page as number) - 1))
    const totalCount = dataList.length

    this.SET_CHANGE_VALUE({ key: 'dashboardList', value: pageList })
    this.SET_CHANGE_VALUE({ key: 'dashboardListTotalCount', value: totalCount })
  }

  // @Action({ rawError: true })
  // public dateReform(date: Date) {
  //   this.SET_CHANGE_VALUE({ key: 'dashboardToday', value: `${this.numFormat(date.getFullYear())}-${this.numFormat(date.getMonth() + 1)}-${this.numFormat(date.getDate())}` })
  // }

  // @Action({ rawError: true })
  // public numFormat(variable: Number) {
  //   let twoString = Number(variable).toString()
  //   if (variable < 10) {
  //     twoString = '0' + twoString
  //   }
  //   return twoString
  // }
}

export const DashboardStoreModule = getModule(DashboardStore)
