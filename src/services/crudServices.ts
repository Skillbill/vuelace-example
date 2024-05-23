import { type VLCrudProps } from '@skillbill/vuelace-3'

export type User = { id: string; name: string; profile: string; birth: Date }

export const useCrudServices = () => {
  let users: User[] = [
    { id: 'user0', name: 'Example', profile: 'guest', birth: new Date('2000-10-05') },
    { id: 'pinco1', name: 'pinco', profile: 'special_guest', birth: new Date('0000-10-05') }
  ]

  const get: VLCrudProps['getItems'] = async (page, rowsPerPage, filters) => {
    filters
    console.log(page, rowsPerPage, filters)
    return {
      result: users.slice((page - 1) * rowsPerPage, rowsPerPage * page),
      page: { currentPage: page, totalRows: users.length, pageRows: rowsPerPage }
    }
  }

  const add = (user: Omit<User, 'id'>) => {
    users.push({ ...user, id: user.name.concat('' + users.length) })
  }

  const remove = (id: string) => {
    const len = users.length
    users = users.filter((user) => user.id !== id)
    if (users.length === len) {
      throw new Error('User not found')
    }
  }

  const edit = (user: User) => {
    const toEdit = users.find(({ id }) => user.id === id)
    if (toEdit) {
      Object.assign(toEdit, user)
    } else {
      throw new Error('User not found')
    }
  }

  return {
    get,
    add,
    remove,
    edit
  }
}
