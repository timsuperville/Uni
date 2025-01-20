const header = () => {
   return `
        <div>
    <div class="col-12" id="user-nav">
      <nav class="navbar navbar-expand-lg blur blur-rounded shadow start-0 end-0 bg-white px-3">
        <div class="container-fluid">
          <a class="navbar-brand font-weight-bolder ms-lg-0 ms-3" href="/">
            Uni
          </a>
          <button
            class="navbar-toggler shadow-none ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon mt-2">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navigation">
            <ul class="navbar-nav mx-auto ms-xl-auto me-xl-7">
              <li class="nav-item mx-auto">
                <a class="nav-link me-2 active m-2 p-3" href="/">
                  <i class="fa fa-user"></i>
                  Personal
                </a>
              </li>
              <li class="nav-item mx-auto">
                <a class="nav-link me-2 m-2 p-3" href="/home">
                  <i class="fas fa-home"></i>
                  Home
                </a>
              </li>
              <li class="nav-item mx-auto">
                <a class="nav-link me-2 m-2 p-3" href="/work">
                  <i class="fas fa-briefcase"></i>
                  Work
                </a>
              </li>
            </ul>
        <div class="navbar-nav d-flex flex-row">
          <div class="nav-item dropdown pe-2">
            <a
              class="nav-link dropdown-toggle pe-0"
              href="javascript:;"
              id="dropdownMenuButton"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="media d-flex align-items-center">
                <img
                  class="avatar avatar-xs me-2"
                  width="20%"
                  alt="Image"
                  src="/img/avatar.png"
                />
                <div class="media-body d-none d-lg-block">
                  <span class="mb-0 font-small fw-bold text-dark">
                     <%= user.firstname %>
                  </span>
                </div>
              </div>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a class="dropdown-item border-radius-md" href="/user/profile">
                  <div class="d-flex py-1">
                    <div
                      class="icon icon-shape icon-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center border-radius-md"
                    >
                      <i class="fa fa-user"></i>
                    </div>
                    <span class="font-weight-bold">Profile</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="d-flex py-1">
                    <div
                      class="icon icon-shape icon-sm bg-gradient-dark text-center me-2 d-flex align-items-center justify-content-center border-radius-md"
                    >
                      <i class="fa fa-cog"></i>
                    </div>
                    <span class="font-weight-bold">Settings</span>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="d-flex py-1">
                    <div
                      class="icon icon-shape icon-sm bg-gradient-info text-center me-2 d-flex align-items-center justify-content-center border-radius-md"
                    >
                      <i class="fa fa-credit-card"></i>
                    </div>
                    <span class="font-weight-bold">Billing</span>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider border-0" />
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="/logout">
                  <div class="d-flex py-1">
                    <div
                      class="icon icon-shape icon-sm bg-gradient-danger text-center me-2 d-flex align-items-center justify-content-center border-radius-md"
                    >
                      <i class="fa fa-sign-out-alt"></i>
                    </div>
                    <span class="font-weight-bold">Logout</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
          </div>
        </div>
        
      </nav>
    </div>
  </div>
   `;
   };

module.exports = header;