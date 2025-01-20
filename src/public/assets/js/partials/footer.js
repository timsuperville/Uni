const footer = () => {
    return `
        <div class="container-fluid">
  <div
    class="row bg-white position-fixed bottom-0 start-0 end-0 justify-content-center"
  >
    <div class="col-lg-6 text-lg-start text-center">
      <ul class="nav nav-tabs">
        <li class="nav-item mx-auto">
          <a
            href="/user/finance"
            class="nav-link text-body font-weight-bold px-3"
          >
            <i class="fa fa-money me-sm-1"></i>
            <span class="d-sm-inline d-none">Finance</span>
          </a>
        </li>
        <li class="nav-item mx-auto">
          <a
            href="/user/tasks"
            class="nav-link text-body font-weight-bold px-3"
          >
            <i class="fa fa-list-check me-sm-1"></i>
            <span class="d-sm-inline d-none">Tasks</span>
          </a>
        </li>
        <li class="nav-item mx-auto">
          <a
            href="/user/calendar"
            class="nav-link text-body font-weight-bold px-3"
          >
            <i class="fa fa-calendar me-sm-1"></i>
            <span class="d-sm-inline d-none">Calendar</span>
          </a>
        </li>
        <li class="nav-item mx-auto">
          <a
            href="/user/profile"
            class="nav-link text-body font-weight-bold px-3"
          >
            <i class="fa fa-user me-sm-1"></i>
            <span class="d-sm-inline d-none">Profile</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
    `;
}

module.exports = footer;