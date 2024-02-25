import React from 'react'
import AdminNavbar from '../components/AdminSections/AdminNavbar'
import AdminCulturesSection from '../components/AdminSections/AdminCulturesSection'
import { useSelector } from 'react-redux'
import AdminSponsorsSection from '../components/AdminSections/AdminSponsorsSection'
import AdminChatSection from '../components/AdminSections/AdminChatSection'

const AdminPage = () => {
  const selectedMenu = useSelector((state) => state.adminState?.menu);
  return (
    <div>
      <AdminNavbar/>

      {selectedMenu === "addCultures" && <AdminCulturesSection/>}
      {selectedMenu === "sponsors" && <AdminSponsorsSection/>}
      {selectedMenu === "chat" && <AdminChatSection/>}
    </div>
  )
}

export default AdminPage
