import Link from 'next/link'
import { gfAdminMain } from 'goldfish'

import 'shared/components/Admin/style/admin-main.sass'

export default class Admin extends React.Component {

  render() {
    return (
      <div className="admin-main container">
        <h1>ADMIN_PANEL</h1>

        <ul>
          {gfAdminMain.list.map(item => (
            <li key={item}>
              <Link href={`/admin/${item}`}><a>{item}</a></Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}