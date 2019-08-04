import { AdminLayout } from 'shared/layouts'

import 'shared/components/Admin/style/admin-main.sass'

export default class Admin extends React.Component {

  render() {
    return (
      <AdminLayout className="admin-main container">
        <h1>ADMIN_PANEL</h1>

      </AdminLayout>
    );
  }
}