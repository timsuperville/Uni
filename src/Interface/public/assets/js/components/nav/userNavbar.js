import { userSettings } from "../userSettings.js";

const userNavbar = () => {
  return `
    <nav class="navbar navbar-expand-lg position-sticky blur blur-rounded top-0 shadow start-0 end-0 bg-white px-4 z-1">
      <div class="container-fluid">
        <a class="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="/">
          Uni
        </a>
        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
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
        </div>
      </div>
    </nav>
  `;
};

export default userNavbar;
