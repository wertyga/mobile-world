import Head from 'next/head'
import Link from 'next/link'
import { gfAdminWrapper } from 'goldfish/Admin'

import './admin-wrapper.sass'

export class AdminLayout extends React.Component {
  render () {
    const { className, children } = this.props;

    return (
      <div className={cn('admin-wrapper container', className)}>
        <div className="admin-wrapper__menu">
          {gfAdminWrapper.menu.map(({ href, text }) => (
            <Link href={href} key={href} prefetch>
              <a>{text}</a>
            </Link>
          ))}
        </div>

        {children}
      </div>
    );
  }
}