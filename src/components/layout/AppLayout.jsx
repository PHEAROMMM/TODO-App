import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import ScrollToTop from './ScrollToTop'
import StorageNotice from './StorageNotice'

export default function AppLayout() {
    return (
        <div className="shell">
            <ScrollToTop />
            <Navbar />
            <StorageNotice />
            <main className="page">
                <Outlet />
            </main>
        </div>
    )
}