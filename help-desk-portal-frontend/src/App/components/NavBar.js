import React from 'react'

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                    <div class="container-fluid">
                        {/* <a class="navbar-brand " href="javascript:void(0)">
                        <img src={logo} className='img-responsive' height="28"
                        alt=" Logo" loading="lazy" /></a>*/}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-ex-7" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbar-ex-7">


                            <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-dark rounded-5 shadow-sm text-color-white" id="pillNav2" role="tablist">
                                <li class="active" role="presentation">
                                    <a href="#hometab" class=" navbar-brand" id="home-tab2" >
                                        HelpDeskPortel</a>
                                </li>

                                <li role="presentation">
                                    <a href="#javatab" class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" >
                                        Tickets</a>
                                </li>

                                <li role="presentation">
                                    <a href="#csharptab" class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">
                                        Categories</a>
                                </li>

                                

                            </ul>

                            <ul class="navbar-nav ms-lg-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="javascript:void(0)"><i class="bi bi-person-circle hamIcon"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="javascript:void(0)"><i class="bi bi-question-square hamIcon"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="javascript:void(0)"><i class="bi bi-box-arrow-left hamIcon"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/*navbar end*/}
        </div>
    )
}

export default NavBar
