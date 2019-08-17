import { useState } from 'react'
import { withRouter } from 'next/router'
import _JSXStyle from 'styled-jsx/style'

import { observer } from 'mobx-react'
import { gfAdmin } from 'goldfish'
import { Loader } from 'shared/components/Common'

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
      <div className="content">
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

      <style jsx>{`
        .admin-auth {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 10rem;
          flex-direction: column;
        }
        .error {
          margin-bottom: 2rem;
        }
        .content {
          display: flex;
          flex-direction: column;
          width: 20rem;
        }
        input {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </form>
  );
}

export default withRouter(inject('adminStore')(observer(AdminAuthComponent)))