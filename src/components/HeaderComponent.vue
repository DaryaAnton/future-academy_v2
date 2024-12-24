<template>
  <header :class="headerClasses">
    <nav class="navbar navbar-expand-xl py-2">
      <div class="container">
        <router-link to="/" class="header-main__logo me-xl-6">
          <svg width="57" height="40">
            <use xlink:href="@/assets/icons/sprite.svg#logo"></use>
          </svg>
        </router-link>
        <!-- <a href="index.html" class="header-main__logo me-xl-6">
          <svg width="57" height="40">
            <use xlink:href="@/assets/icons/sprite.svg#logo"></use>
          </svg>
        </a> -->
        <button class="navbar-toggle d-xl-none order-1" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-icon"></span>
        </button>
        <ul class="row row-cols-auto align-items-center gx-4 d-none d-md-flex d-xl-none">
          <li class="col dropdown">
            <button class="dropdown-toggle p-0" data-bs-toggle="dropdown" aria-expanded="false" type="button">
              <svg width="17" height="20">
                <use xlink:href="@/assets/icons/sprite.svg#pin"></use>
              </svg>
              <span>Нижний Новгород</span>

              <svg class="dropdown-icon" width="10" height="7">
                <use xlink:href="@/assets/icons/sprite.svg#arrow"></use>
              </svg>
            </button>

            <div class="dropdown-menu">
              <div class="dropdown-list">
                <div class="form-check">
                  <input class="form-check-input me-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                  <label class="form-check-label" for="flexRadioDefault1">
                    Дзержинск
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input me-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                  <label class="form-check-label" for="flexRadioDefault2">
                    Нижний Новгород
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input me-1" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                  <label class="form-check-label" for="flexRadioDefault3">
                    On-line
                  </label>
                </div>
              </div>
            </div>
          </li>

          <li class="col">
            <ul class="d-flex flex-column gap-1 gap-xl-0">
              <li><a href="tel:8 800 950-33-98">8 800 950-33-98</a></li>
            </ul>
          </li>

          <li class="col">
            <a href="#!">
              <svg width="18" height="19">
                <use xlink:href="@/assets/icons/sprite.svg#user"></use>
              </svg>
              Войти
            </a>
          </li>
        </ul>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav align-items-xl-center gap-xl-4 me-xl-auto">
            <li class="nav-item">

              <router-link to="/courses">
                <svg width="20" height="16">
                  <use xlink:href="@/assets/icons/sprite.svg#categories"></use>
                </svg>Все курсы
              </router-link>
              <!-- <a href="/courses/courses.html">
                <svg width="20" height="16">
                  <use xlink:href="@/assets/icons/sprite.svg#categories"></use>
                </svg>Все курсы</a> -->
            </li>
            <li class="nav-item d-xl-none"><a href="#!">Об академии</a></li>
            <li class="nav-item"><a href="#!">Мероприятия</a></li>
            <li class="nav-item d-xl-none"><a href="#!">Новости</a></li>
            <li class="nav-item"><a href="#!">Базы знаний</a></li>
            <li class="nav-item"><a href="#!">Карьера</a></li>
            <li class="nav-item d-xl-none"><a href="#!">Контакты</a></li>
          </ul>

          <ul class="row flex-column flex-xl-row row-cols-xl-auto align-items-center gx-4">
            <li class="col dropdown mb-3 mb-xl-0 d-md-none d-xl-block" id="mobile-dropdown">
              <button class="dropdown-toggle p-0" data-bs-toggle="dropdown" aria-expanded="false" type="button">
                <svg width="17" height="20">
                  <use xlink:href="@/assets/icons/sprite.svg#pin"></use>
                </svg>
                <span>Нижний Новгород</span>

                <svg class="dropdown-icon" width="10" height="7">
                  <use xlink:href="@/assets/icons/sprite.svg#arrow"></use>
                </svg>
              </button>

              <div class="dropdown-menu">
                <div class="dropdown-list">
                  <div class="form-check">
                    <input class="form-check-input me-1" type="radio" name="flexRadioDefaultM" id="flexRadioDefaultM1">
                    <label class="form-check-label" for="flexRadioDefaultM1">
                      Дзержинск
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input me-1" type="radio" name="flexRadioDefaultM" id="flexRadioDefaultM2"
                      checked>
                    <label class="form-check-label" for="flexRadioDefaultM2">
                      Нижний Новгород
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input me-1" type="radio" name="flexRadioDefaultM" id="flexRadioDefaultM3">
                    <label class="form-check-label" for="flexRadioDefaultM3">
                      On-line
                    </label>
                  </div>
                </div>
              </div>
            </li>

            <li class="col order-1 order-xl-0">
              <ul class="d-flex flex-column gap-1 gap-xl-0">
                <li><a href="tel:8 800 950-33-98" class="d-md-none d-xl-block">8 800 950-33-98</a></li>
                <li><a href="#!" class="d-xl-none">г. Москва, ул. Ленина, д. 50</a></li>
                <li><a href="#!" class="d-xl-none">info@hodfutureacademy.ru</a></li>
              </ul>
            </li>

            <li class="col mb-5 mb-xl-0 d-md-none d-xl-block">
              <a href="#!">
                <svg width="18" height="19">
                  <use xlink:href="@/assets/icons/sprite.svg#user"></use>
                </svg>
                Войти
              </a>
            </li>
          </ul>

          <ul class="d-flex gap-4 d-xl-none header-main__socials">
            <li><a href="#!">
                <svg width="20" height="12">
                  <use xlink:href="@/assets/icons/sprite.svg#vk"></use>
                </svg>
              </a></li>
            <li><a href="#!">
                <svg width="16" height="17">
                  <use xlink:href="@/assets/icons/sprite.svg#instagram"></use>
                </svg>
              </a></li>
            <li><a href="#!">
                <svg width="18" height="18">
                  <use xlink:href="@/assets/icons/sprite.svg#facebook"></use>
                </svg>
              </a></li>
            <li><a href="#!">
                <svg width="20" height="14">
                  <use xlink:href="@/assets/icons/sprite.svg#youtube"></use>
                </svg>
              </a></li>
            <li><a href="#!">
                <svg width="16" height="14">
                  <use xlink:href="@/assets/icons/sprite.svg#telegram"></use>
                </svg>
              </a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },
  computed: {
    headerClasses() {
      return {
        'sticky-top': true,
        'header-main': true,
        'header-main--light': this.theme === 'light',
        'header-main--dark': this.theme === 'dark'
      };
    }
  }
}
</script>