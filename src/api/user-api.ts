import request from '@/utils/request'

export const login = (data: any) =>
  request({
    url: '/login',
    method: 'post',
    data
  })

export const checkLogin = (data: any) =>
  request({
    url: '/check-login',
    method: 'post',
    data
  })

export const logout = (data: any) =>
  request({
    url: '/logout',
    method: 'post',
    data
  })

export const getUserList = (data: any) =>
  request({
    url: '/user-list',
    method: 'post',
    data
  })

export const getDashboardUser = (data: any) =>
  request({
    url: '/dashboard-userlist',
    method: 'post',
    data
  })
