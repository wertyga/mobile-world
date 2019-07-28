import { useState } from 'react'
import { withRouter } from 'next/router'

import { observer } from 'mobx-react'
import { gfAdmin } from 'goldfish'
import { Loader } from 'shared/components/Common'

import 'shared/components/Admin/style/admin-auth.sass'

const AdminAuthComponent = (props) => {
  const { adminStore, router } = props
  const { adminAuth, error, pending } = adminStore
  const [name, nameChange] = useState('')
  const [pass, passChange] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    adminStore.error = ''
    if (!name || !pass) {
      adminStore.error = gfAdmin.unFilledField
      return;
    }
    const sendObj = {
      name,
      pass,
    }
    await adminAuth(sendObj)
    if (!adminStore.error) router.push('/admin/main')
  }

  const handleChange = name => ({ target: { value }}) => {
    adminStore.error = ''
    if (name === 'name') nameChange(value)
    if (name === 'pass') passChange(value)
  }

  return (
    <form className="admin-auth" onSubmit={onSubmit}>
      {error && <div className="error">{error}</div>}
      {pending && <Loader />}
      <div className="admin-auth__content">
        <input
          type="text"
          value={name}
          onChange={handleChange('name')}
        />
        <input
          type="text"
          value={pass}
          onChange={handleChange('pass')}
        />
        <button>SUBMIT</button>
      </div>
    </form>
  );
}

export default withRouter(inject('adminStore')(observer(AdminAuthComponent)))