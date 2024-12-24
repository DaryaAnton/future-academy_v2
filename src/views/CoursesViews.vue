<script>
import TabsComponent from '@/components/TabsComponent.vue';

export default {
  components: { TabsComponent }
}
</script>

<template>
  <main>

    <section class="pt-2 pb-5 pb-lg-10">
      <div class="container">

        <!--breadcrumb-->
        <nav
          style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='14'%3E%3Cpath d='M9.506 10.85C9.646 10.5513 9.78133 10.29 9.912 10.066C10.052 9.842 10.1873 9.65533 10.318 9.506H2.156V8.918H10.318C10.1873 8.75933 10.052 8.568 9.912 8.344C9.78133 8.12 9.646 7.86333 9.506 7.574H9.996C10.584 8.25533 11.2 8.75933 11.844 9.086V9.338C11.2 9.65533 10.584 10.1593 9.996 10.85H9.506Z' fill='%23828282'/%3E%3C/svg%3E&#34;);"
          aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/index.html">Главная</a></li>
            <li class="breadcrumb-item active" aria-current="page">Все курсы</li>
          </ol>
        </nav>
        <!--/breadcrumb-->

        <h1 class="title fw-bold mb-2 mb-lg-4">Все программы обучения</h1>

        <!--tabs--------------------------->
        <section class="tabs">
          <div class="container">
            <div class="row mb-4 mb-lg-13">
              <div class="col-12 col-lg-3 mb-4 mb-lg-0 p-0" id="accordion-wrapper">

                <!--tabs-filter__wrapper(lg и выше)-->
                <div class="d-none d-lg-block tabs-filter__wrapper">
                  <div class="tabs-filter__item d-flex flex-column">
                    <hr class="mb-3 border-secondary-subtle tabs__top-line">
                    <h6 class="tabs-filter__title mb-2 fw-medium fs-6">Уровень сложности</h6>
                    <label class="tabs-filter__label mb-2"><input type="radio" name="level"
                        value="Новичок"><span>Новичок</span></label>
                    <label class="tabs-filter__label mb-2"><input type="radio" name="level"
                        value="Пользователь"><span>Пользователь</span></label>
                    <label class="tabs-filter__label mb-2"><input type="radio" name="level"
                        value="Профессионал"><span>Профессионал</span></label>
                    <label class="tabs-filter__label mb-2"><input type="radio" name="level"
                        value="Читер"><span>Читер</span></label>
                    <label class="tabs-filter__label"><input type="radio" name="level"
                        value="Любой"><span>Любой</span></label>
                  </div>

                  <hr class="mt-3 mb-3 border-secondary-subtle">
                  <div class="tabs-filter__item d-flex flex-column">
                    <h6 class="tabs-filter__title mb-2 fw-medium fs-6">Тип обучения</h6>
                    <label class="tabs-filter__label mb-2"><input type="radio" name="type"
                        value="Профессия"><span>Профессия</span></label>
                    <label class="tabs-filter__label mb-2"><input type="radio" name="type"
                        value="Курс"><span>Курс</span></label>
                    <label class="tabs-filter__label mb-2"><input type="radio" name="type"
                        value="Любой"><span>Любой</span></label>
                  </div>

                  <hr class="mt-3 mb-3 border-secondary-subtle">
                  <div class="tabs-filter__item d-flex flex-column">
                    <h6 class="tabs-filter__title mb-2 fw-medium fs-6">Длительность</h6>
                    <span class="mb-1" id="months-value">24 месяца</span>
                    <input class="tabs-filter__range" type="range" min="0" max="24" value="24" id="months-slider">
                  </div>

                  <hr class="mt-3 mb-3 border-secondary-subtle">
                  <button type="button" class="btn tabs__btn reset">Сброс фильтра</button>
                </div>
                <!--/tabs-filter__wrapper(lg и выше)-->

                <!--tabs-filter__accordion(до lg)-->
                <div class="d-lg-none tabs-filter__accordion">
                  <div class="tabs-filter__accordion-title d-flex">
                    <img src="/images/common/filter.svg" alt="filter">
                    <p class="ms-1 fw-semibold">Фильтры</p>
                  </div>
                  <div class="tabs-filter__accordion-content mt-3">
                    <div class="tabs-filter__item d-flex flex-column">

                      <h6 class="tabs-filter__title mb-2 fw-medium fs-6">Уровень сложности</h6>
                      <label class="tabs-filter__label mb-2"><input type="radio" name="level"
                          value="Новичок"><span>Новичок</span></label>
                      <label class="tabs-filter__label mb-2"><input type="radio" name="level"
                          value="Пользователь"><span>Пользователь</span></label>
                      <label class="tabs-filter__label mb-2"><input type="radio" name="level"
                          value="Профессионал"><span>Профессионал</span></label>
                      <label class="tabs-filter__label mb-2"><input type="radio" name="level"
                          value="Читер"><span>Читер</span></label>
                      <label class="tabs-filter__label"><input type="radio" name="level"
                          value="Любой"><span>Любой</span></label>
                    </div>

                    <hr class="mt-2 mb-2 border-secondary-subtle">
                    <div class="tabs-filter__item d-flex flex-column">
                      <h6 class="tabs-filter__title mb-2 fw-medium fs-6">Тип обучения</h6>
                      <label class="tabs-filter__label mb-2"><input type="radio" name="type"
                          value="Профессия"><span>Профессия</span></label>
                      <label class="tabs-filter__label mb-2"><input type="radio" name="type"
                          value="Курс"><span>Курс</span></label>
                      <label class="tabs-filter__label mb-2"><input type="radio" name="type"
                          value="Любой"><span>Любой</span></label>
                    </div>

                    <hr class="mt-2 mb-2 border-secondary-subtle">
                    <div class="tabs-filter__item d-flex flex-column">
                      <h6 class="tabs-filter__title mb-2 fw-medium fs-6">Длительность</h6>
                      <span class="mb-1" id="months-value">до 24 месяцев</span>
                      <input class="tabs-filter__range" type="range" min="0" max="24" value="24" id="months-slider">
                    </div>

                    <hr class="mt-2 mb-2 border-secondary-subtle">
                    <button type="button" class="btn tabs__btn reset">Сброс фильтра</button>
                  </div>
                </div>
                <!--/tabs-filter__accordion(lg и выше)-->

              </div>

              <TabsComponent/>
              <!-- <div class="col-12 col-lg-9">
                <ul class="nav nav-underline mb-3 d-flex justify-content-between border-bottom" id="pills-tab"
                  role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active d-flex align-items-center" id="pills-home-tab" data-bs-toggle="pill"
                      data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                      aria-selected="true">
                      <div class="me-1">
                        <img src="/images/common/children.png" alt="children">
                      </div>
                      <div>
                        <p class="tabs__name">Дети</p>
                        <span class="tabs__age">8 — 14 лет</span>
                      </div>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link d-flex align-items-center" id="pills-profile-tab" data-bs-toggle="pill"
                      data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                      aria-selected="false">
                      <div class="me-1">
                        <img src="/images/common/teenagers.png" alt="teenagers">
                      </div>
                      <div>
                        <p class="tabs__name">Подростки</p>
                        <span class="tabs__age">14 — 18 лет</span>
                      </div>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link d-flex align-items-center" id="pills-contact-tab" data-bs-toggle="pill"
                      data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                      aria-selected="false">
                      <div class="me-1">
                        <img src="/images/common/family.png" alt="family">
                      </div>
                      <div>
                        <p class="tabs__name">Взрослые</p>
                        <span class="tabs__age">18 — ∞</span>
                      </div>
                    </button>
                  </li>
                </ul>

                <div class="tab-content mt-2 mt-lg-4" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                    aria-labelledby="pills-home-tab" tabindex="0">
                    <div class="row">
                      <div class="col-12 d-flex flex-wrap align-lg-items-center mb-lg-1">
                        <button type="button" class="btn tabs__btn" data-catId="0">Робототехника</button>
                        <button type="button" class="btn tabs__btn" data-catId="1">Создание игр</button>
                        <button type="button" class="btn tabs__btn" data-catId="2">Web-разработка</button>
                        <button type="button" class="btn tabs__btn" data-catId="3">Мультимедиа</button>
                        <button type="button" class="btn tabs__btn" data-catId="4">Шахматы</button>
                      </div>

                      <div class="col-12 d-flex flex-wrap align-lg-items-center">
                        <button type="button" class="btn tabs__btn" data-catId="5">3D-моделирование и дизайн</button>
                        <button type="button" class="btn tabs__btn" data-catId="6">Английский язык</button>
                        <button type="button" class="btn tabs__btn" data-catId="7">Блогинг</button>
                        <button type="button" class="btn tabs__btn" data-catId="8">Soft skills</button>
                      </div>
                    </div>

                    <div class="row mt-4 mt-lg-7">
                      <div class="col-12 d-flex flex-wrap justify-content-between" data-age="kids">

                      </div>
                    </div>

                  </div>

                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">
                    <div class="row">
                      <div class="col-12 d-flex flex-wrap align-lg-items-center mb-lg-1">
                        <button type="button" class="btn tabs__btn" data-catId="0">Робототехника</button>
                        <button type="button" class="btn tabs__btn" data-catId="1">Создание игр</button>
                        <button type="button" class="btn tabs__btn" data-catId="2">Web-разработка</button>
                        <button type="button" class="btn tabs__btn" data-catId="3">Мультимедиа</button>
                        <button type="button" class="btn tabs__btn" data-catId="4">Шахматы</button>
                      </div>

                      <div class="col-12 d-flex flex-wrap align-lg-items-center">
                        <button type="button" class="btn tabs__btn" data-catId="5">3D-моделирование и дизайн</button>
                        <button type="button" class="btn tabs__btn" data-catId="6">Английский язык</button>
                        <button type="button" class="btn tabs__btn" data-catId="7">Блогинг</button>
                        <button type="button" class="btn tabs__btn" data-catId="8">Soft skills</button>
                      </div>
                    </div>

                    <div class="row mt-4 mt-lg-7">
                      <div class="col-12 d-flex flex-wrap justify-content-between" data-age="teenagers">

                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">
                    <div class="row">
                      <div class="col-12 d-flex flex-wrap align-lg-items-center mb-lg-1">
                        <button type="button" class="btn tabs__btn" data-catId="0">Робототехника</button>
                        <button type="button" class="btn tabs__btn" data-catId="1">Создание игр</button>
                        <button type="button" class="btn tabs__btn" data-catId="2">Web-разработка</button>
                        <button type="button" class="btn tabs__btn" data-catId="3">Мультимедиа</button>
                        <button type="button" class="btn tabs__btn" data-catId="4">Шахматы</button>
                      </div>

                      <div class="col-12 d-flex flex-wrap align-lg-items-center">
                        <button type="button" class="btn tabs__btn" data-catId="5">3D-моделирование и дизайн</button>
                        <button type="button" class="btn tabs__btn" data-catId="6">Английский язык</button>
                        <button type="button" class="btn tabs__btn" data-catId="7">Блогинг</button>
                        <button type="button" class="btn tabs__btn" data-catId="8">Soft skills</button>
                      </div>
                    </div>

                    <div class="row mt-4 mt-lg-7">
                      <div class="col-12 d-flex flex-wrap justify-content-between" data-age="adult">

                      </div>
                    </div>

                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </section>
        <!--/tabs--------------------------->

      </div>
    </section>

  </main>
</template>