import './index.css'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)
    return(
        <div className={`sidebar ${showNav ? 'show' : ''}`}>
            <div className="sidebar-header">
                <h2>IPL Players</h2> 
            </div>
        </div>
    )
}

export default Sidebar 