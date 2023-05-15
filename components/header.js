import React from 'react'

const Header = () => {
    return (
        <nav className='menu_black'>
            <div className='container py-3 d-flex justify-content-between'>
                <h2 className='text-white align-self-center'>Forms.ai</h2>
                <div className="float-right d-flex justify-content-between">
                    <div class="dropdown">
                        <button
                            class="btn btn-secondary menu_black border-0 dropdown-toggle text-secondary
                            me-5 mt-1 fw-bold"
                            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Broswe Forms
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <a className='text-white mt-2'>Sign up / Login</a>
                </div>
            </div>
        </nav>
    )
}

export default Header