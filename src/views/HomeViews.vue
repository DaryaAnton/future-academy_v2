<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  components: { HeaderComponent }
}
</script>

<template>
  <main>
    <HeaderComponent />

    <!--hero--primary--------------------------->
    <section class="hero hero--primary mb-10">
      <div class="hero__mobile-image d-md-none">
        <img src="@/assets/images/hero/girl.jpg" alt="girl with notebook" height="224">
      </div>

      <div class="container z-1 position-relative">
        <div class="row">
          <div class="col col-md-6">
            <h1 class="hero__title">Образовательная платформа</h1>
            <h2 class="hero__title">ХОД Future Academy</h2>
            <p class="hero__text">Актуальные знания для новичков и профессионалов</p>
          </div>
        </div>
      </div>
    </section>
    <!--hero--primary--------------------------->

    <!--tabs--------------------------->
    <section class="tabs">
      <div class="container">
        <div class="row mb-4">
          <div class="col-12 col-lg-3 mb-4 mb-lg-0 appeal__owl">

            <div class="owl__speech">
              <div class="owl__speech-title fs-lg-6 fw-semibold mb-2">Кем вы хотите стать?</div>
              <div class="owl__speech-text fs-lg-6 fw-medium">
                Пора найти себя
                и выбрать подходящий курс :)
                <br>
                <div class="mt-2 owl__speech-text fs-lg-6 fw-medium">Удачи!</div>
              </div>
              <span class="owl__tail owl__tail_appeal"></span>
            </div>

            <img class="owl__common owl__common_tabs" src="@/assets/images/common/owl.svg" alt="owl">
          </div>

          <div class="col-12 col-lg-9">
            <ul class="nav nav-underline mb-3 d-flex justify-content-between" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active d-flex align-items-center" id="pills-home-tab" data-bs-toggle="pill"
                  data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                  <div class="me-1">
                    <img src="@/assets/images/common/children.png" alt="children">
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
                    <img src="@/assets/images/common/teenagers.png" alt="teenagers">
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
                    <img src="@/assets/images/common/family.png" alt="family">
                  </div>
                  <div>
                    <p class="tabs__name">Взрослые</p>
                    <span class="tabs__age">18 — ∞</span>
                  </div>
                </button>
              </li>

            </ul>
            <div class="tab-content mt-2 mt-lg-4" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                tabindex="0">
                <div class="row">
                  <div class="col-12 d-flex flex-wrap align-lg-items-center mb-lg-1">
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Робототехника</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Создание игр</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Web-разработка</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Мультимедиа</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Шахматы</a>
                  </div>

                  <div class="col-12 d-flex flex-wrap align-lg-items-center">
                    <a href="/course-chess/course-chess.html" class="tabs__btn">3D- и дизайн</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Английский язык</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Блогинг</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Soft skills</a>
                  </div>
                </div>

              </div>

              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                tabindex="0">
                <div class="row">
                  <div class="col-12 d-flex flex-wrap align-lg-items-center mb-lg-1">
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Робототехника</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Создание игр</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Web-разработка</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Мультимедиа</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Шахматы</a>
                  </div>

                </div>
              </div>

              <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                tabindex="0">
                <div class="row">
                  <div class="col-12 d-flex flex-wrap align-lg-items-center">
                    <a href="/course-chess/course-chess.html" class="tabs__btn">3D- и дизайн</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Английский язык</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Блогинг</a>
                    <a href="/course-chess/course-chess.html" class="tabs__btn">Soft skills</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
    <!--/tabs--------------------------->


    <!--video----------------------------------->
    <section class="video pt-md-7 pb-md-16">
      <div class="container">
        <div class="video__wrapper position-relative d-flex justify-content-center">
          <div class="video__bg"></div>

          <video class="video__player w-100 rounded" poster="@/assets/images/video/poster.jpg" preload muted="true"
            playsinline="">
            <source src="/videos/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>

          <button class="video__button position-absolute z-1 " type="button" aria-label="Play video">
            <img src="@/assets/images/video/play.svg" width="100%" height="100%" alt="Play icon">
          </button>
        </div>
      </div>
    </section>
    <!--video----------------------------------->


    <!--counting-------------------------------->
    <section class="counting mb-2 mb-md-8">
      <div class="container">
        <div class="row mb-2 mb-md-4">
          <div class="col col-xl-8">
            <h3 class="counting__title">Актуальные знания от признанных экспертов рынка
              для новичков и практикующих специалистов.
            </h3>
          </div>
        </div>

        <ul class="row row-cols-auto g-2 g-md-8">
          <li class="col">
            <p class="counting__number text-gradient">600</p>
            <p class="counting__text">Курсов</p>
          </li>
          <li class="col">
            <p class="counting__number text-gradient">82</p>
            <p class="counting__text">Ведущих <br>преподавателей</p>
          </li>
          <li class="col">
            <p class="counting__number text-gradient">14 795</p>
            <p class="counting__text">Выпускников</p>
          </li>
        </ul>
      </div>
    </section>
    <!--counting-------------------------------->


    <!--news------------------------------------>
    <section class="news mb-10">

      <!--modal-->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">

              <div class="owl">
                <div class="container">
                  <div class="card pt-2 pt-md-4 pb-md-4 pe-lg-4 owl__card position-relative border-0">
                    <div class="row">
                      <div class="col-md-12 col-lg-7">

                        <div class="row">
                          <div class="col-4">
                            <div class="owl__message">
                              <img class="owl__img img-fluid" src="@/assets/images/common/owl.svg" alt="owl">
                            </div>
                          </div>

                          <div class="mb-5 col-8 offset-4 mb-lg-0">
                            <div class="d-flex justify-content-center align-items-center">
                              <div class="owl__speech">
                                <span class="owl__tail"></span>
                                <h6 class="owl__speech-title mb-1 fw-semibold">Помочь с выбором?</h6>
                                <p class="owl__speech-text fw-medium">
                                  Оставьте заявку и наши специалисты свяжутся с вами, ответят на все вопросы
                                  и подберут подходящий вариант обучения.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-12 col-lg-5">
                        <div class="card-body">

                          <form class="form ps-1 pe-1 ps-lg-0 pe-lg-0">
                            <div class="form-group">
                              <input type="text" class="form-control col-12 mb-2 form__input" placeholder="Ваше имя">
                            </div>
                            <div class="form-group justify-content-between">
                              <div class="row">
                                <div class="col-6 mb-2">
                                  <input type="text" class="form-control col-12 form__input" placeholder="Ваш телефон">
                                </div>
                                <div class="col-6">
                                  <input type="email" class="form-control col-12 form__input" placeholder="Ваш e-mail">
                                </div>
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="row mb-4 mb-md-0">
                                <div class="col-6">
                                  <p class="m-0 form__text">
                                    Нажимая на кнопку, я соглашаюсь
                                    на обработку персональных
                                    и с правилами по льзования Платформой
                                  </p>
                                </div>

                                <div class="col-6">
                                  <button type="submit" class="btn btn__orange col-12 w-100">Кнопка</button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!--/modal-->

      <div class="container">
        <div class="row">
          <div class="col-12">

            <div class="card p-1 p-lg-3 mb-2 position-relative news__card bg_orange">
              <div class="card-body d-flex flex-column justify-content-start flex-lg-row align-items-lg-center">
                <div class="row news__card-banner-date mb-4 mb-lg-0 col-lg-2">
                  <div class="col-5 col-sm-3 col-md-2 col-lg-auto fw-bold">
                    <div class="news__card-banner-day">25</div>
                    <div class="news__card-banner-month">ноября</div>
                  </div>
                  <div class="d-block col-7 col-sm-9 col-md-10 d-lg-none fw-medium news__card-banner-title mb-4">День
                    открытых дверей </div>
                </div>
                <div class="news__cover col-lg-7">
                  <div class="d-none d-lg-block fw-medium news__card-banner-title mb-4 mb-lg-3">День открытых дверей
                  </div>
                  <p class="col-12 news__card-banner-text mb-2 mb-lg-0">
                    Приглашаем всех желающих на бесплатную экскурсию
                    в мир востребованных профессий и полезных навыков
                  </p>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-start col-lg-3">
                  <button class="news__card-banner-btn d-lg-flex flex-lg-nowrap align-items-lg-center"
                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <span class="me-lg-1">Записаться</span>
                    <svg width="6" height="11">
                      <use xlink:href="/icons/sprite.svg#btnArrow"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="row">

          <div class="col-12 col-lg-5">
            <div class="card p-2 pt-lg-2 pb-lg-4 ps-lg-1 pe-lg-1 mb-2 mb-lg-0 position-relative news__card bg_sky">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">

                <img src="@/assets/images/news/news_monitor.svg" class="card-img-top news__card-icon mb-2 mb-lg-4"
                  alt="monitor">

                <h5 class="card-title mb-2 mb-lg-4">Программы обучения</h5>
                <p class="card-text mb-2 mb-lg-5">
                  В списке наших курсов вы сможете найти профессию и занятие по душе, изучить новое и получить
                  практические знания, которые помогут получить работу мечты.
                </p>

                <button type="button" class="news__card-banner-btn news__card-banner-btn_blue">
                  <span>Подробнее</span>
                  <svg width="6" height="11">
                    <use xlink:href="/icons/sprite.svg#btnArrow"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-7 d-flex flex-column justify-content-between">
            <div class="row d-flex flex-column flex-md-row mb-2 mb-lg-0">

              <div class="col-12 col-md-6 mb-2 mb-md-0 d-flex">
                <div class="card pt-2 pb-2 ps-1 pe-1 pb-lg-3 position-relative news__card bg_green flex-fill">
                  <div class="card-body d-flex flex-column justify-content-center align-items-center">
                    <a href="/news/news.html"
                      class="news__cover d-flex flex-column justify-content-center align-items-center">
                      <img class="news__card-icon mb-2 mb-lg-4" src="@/assets/images/news/news_newspaper.svg"
                        alt="newspaper">
                      <h6 class="fw-medium fs-4 text-center">Новости Академии</h6>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-12 mb-md-0 col-md-6 d-flex">
                <div class="card pt-2 pb-2 ps-1 pe-1 pb-lg-3 position-relative news__card bg_pink flex-fill">
                  <div class="card-body d-flex flex-column justify-content-center align-items-center">
                    <a href="/it-world/it-world.html"
                      class="news__cover d-flex flex-column justify-content-center align-items-center">
                      <img class="news__card-icon mb-2 mb-lg-4" src="@/assets/images/news/news_diagram.svg"
                        alt="diagram">
                      <h6 class="fw-medium fs-4 text-center">Мир IT</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">

              <div class="col-12 mb-2 mb-lg-0">
                <div class="card position-relative news__card bg_yellow">
                  <a href="/test-page/test-page.html" class="card-body p-2 p-lg-5 d-flex flex-column flex-lg-row">

                    <div class="col col-lg-4 d-flex align-items-center mb-2 mb-lg-0">
                      <img src="@/assets/images/news/news_click.svg"
                        class="card-img-top news__card-click col-6 me-2 me-lg-4" alt="click">
                      <h5 class="card-title d-block col-6 fs-4 d-lg-none">Попробуй!</h5>
                    </div>

                    <div class="col col-lg-8">
                      <h5 class="card-title d-none d-lg-block fs-4">Попробуй!</h5>
                      <p class="card-text news__card-banner-text">
                        Пройдите тест и узнайте свои способности
                        в сфере информационных технологий
                      </p>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
    <!--/news----------------------------------->


    <!--card-reviews---------------------------->
    <section class="card-reviews">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h3 class="text-white fw-bold text-center title mb-3">Отзывы наших студентов</h3>
          </div>
        </div>

        <div class="splide" id="card-reviews" role="group" aria-label=""
          data-splide='{"type":"loop","perPage":6, "breakpoints": {"1400": {"perPage": 4},"1200": {"perPage": 3}, "768": {"perPage": 2}, "576": {"perPage": 1}}}'>
          <div class="splide__track">
            <ul class="splide__list">

              <li class="splide__slide">
                <div class="card">
                  <div class="card-body p-2">
                    <div class="row card-reviews__wrapper">
                      <div class="col-4 d-flex justify-content-center align-items-start ">
                        <img class="card-reviews__img" src="@/assets/images/cards/card-reviews/mini_prev_1.svg"
                          alt="foto">
                      </div>
                      <div class="col-8">
                        <h5 class="card-title fw-bold card-reviews__title">Имя Фамилия</h5>
                        <h6 class="card-subtitle mb-2 fw-medium card-reviews__subtitle">Студент курса «WEB-разработчик»
                        </h6>
                      </div>
                    </div>

                    <p class="card-text fw-medium mb-1 mb-lg-2 card-reviews__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id
                      tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac
                      habitasse
                      platea dictumst. In ut dui sodales.
                    </p>
                    <div class="fw-medium d-flex align-items-center">
                      <img src="@/assets/images/common/star_reviews.svg" alt="star">
                      <p class="ms-1">4,87 / 5</p>
                    </div>
                  </div>
                </div>
              </li>

              <li class="splide__slide">
                <div class="card">
                  <div class="card-body p-2">
                    <div class="row card-reviews__wrapper">
                      <div class="col-4 d-flex justify-content-center align-items-start ">
                        <img class="card-reviews__img" src="@/assets/images/cards/card-reviews/mini_prev_2.svg"
                          alt="foto">
                      </div>
                      <div class="col-8">
                        <h5 class="card-title fw-bold card-reviews__title">Имя Фамилия</h5>
                        <h6 class="card-subtitle mb-2 fw-medium card-reviews__subtitle">Студент курса «WEB-разработчик»
                        </h6>
                      </div>
                    </div>

                    <p class="card-text fw-medium mb-1 mb-lg-2 card-reviews__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id
                      tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac
                      habitasse
                      platea dictumst. In ut dui sodales.
                    </p>
                    <div class="fw-medium d-flex align-items-center">
                      <img src="@/assets/images/common/star_reviews.svg" alt="star">
                      <p class="ms-1">4,87 / 5</p>
                    </div>
                  </div>
                </div>
              </li>

              <li class="splide__slide">
                <div class="card">
                  <div class="card-body p-2">
                    <div class="row card-reviews__wrapper">
                      <div class="col-4 d-flex justify-content-center align-items-start ">
                        <img class="card-reviews__img" src="@/assets/images/cards/card-reviews/mini_prev_3.svg"
                          alt="foto">
                      </div>
                      <div class="col-8">
                        <h5 class="card-title fw-bold card-reviews__title">Имя Фамилия</h5>
                        <h6 class="card-subtitle mb-2 fw-medium card-reviews__subtitle">Студент курса «WEB-разработчик»
                        </h6>
                      </div>
                    </div>

                    <p class="card-text fw-medium mb-1 mb-lg-2 card-reviews__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id
                      tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac
                      habitasse
                      platea dictumst. In ut dui sodales.
                    </p>
                    <div class="fw-medium d-flex align-items-center">
                      <img src="@/assets/images/common/star_reviews.svg" alt="star">
                      <p class="ms-1">4,87 / 5</p>
                    </div>
                  </div>
                </div>
              </li>

              <li class="splide__slide">
                <div class="card">
                  <div class="card-body p-2">
                    <div class="row card-reviews__wrapper">
                      <div class="col-4 d-flex justify-content-center align-items-start ">
                        <img class="card-reviews__img" src="@/assets/images/cards/card-reviews/mini_prev_4.svg"
                          alt="foto">
                      </div>
                      <div class="col-8">
                        <h5 class="card-title fw-bold card-reviews__title">Имя Фамилия</h5>
                        <h6 class="card-subtitle mb-2 fw-medium card-reviews__subtitle">Студент курса «WEB-разработчик»
                        </h6>
                      </div>
                    </div>

                    <p class="card-text fw-medium mb-1 mb-lg-2 card-reviews__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id
                      tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac
                      habitasse
                      platea dictumst. In ut dui sodales.
                    </p>
                    <div class="fw-medium d-flex align-items-center">
                      <img src="@/assets/images/common/star_reviews.svg" alt="star">
                      <p class="ms-1">4,87 / 5</p>
                    </div>
                  </div>
                </div>
              </li>

              <li class="splide__slide">
                <div class="card">
                  <div class="card-body p-2">
                    <div class="row card-reviews__wrapper">
                      <div class="col-4 d-flex justify-content-center align-items-start ">
                        <img class="card-reviews__img" src="@/assets/images/cards/card-reviews/mini_prev_2.svg"
                          alt="foto">
                      </div>
                      <div class="col-8">
                        <h5 class="card-title fw-bold card-reviews__title">Имя Фамилия</h5>
                        <h6 class="card-subtitle mb-2 fw-medium card-reviews__subtitle">Студент курса «WEB-разработчик»
                        </h6>
                      </div>
                    </div>

                    <p class="card-text fw-medium mb-1 mb-lg-2 card-reviews__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id
                      tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac
                      habitasse
                      platea dictumst. In ut dui sodales.
                    </p>
                    <div class="fw-medium d-flex align-items-center">
                      <img src="@/assets/images/common/star_reviews.svg" alt="star">
                      <p class="ms-1">4,87 / 5</p>
                    </div>
                  </div>
                </div>
              </li>

              <li class="splide__slide">
                <div class="card">
                  <div class="card-body p-2">
                    <div class="row card-reviews__wrapper">
                      <div class="col-4 d-flex justify-content-center align-items-start ">
                        <img class="card-reviews__img" src="@/assets/images/cards/card-reviews/mini_prev_4.svg"
                          alt="foto">
                      </div>
                      <div class="col-8">
                        <h5 class="card-title fw-bold card-reviews__title">Имя Фамилия</h5>
                        <h6 class="card-subtitle mb-2 fw-medium card-reviews__subtitle">Студент курса «WEB-разработчик»
                        </h6>
                      </div>
                    </div>

                    <p class="card-text fw-medium mb-1 mb-lg-2 card-reviews__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl at augue dapibus, id
                      tristique lorem placerat. Curabitur pellentesque est bibendum urna facilisis varius. In hac
                      habitasse
                      platea dictumst. In ut dui sodales.
                    </p>
                    <div class="fw-medium d-flex align-items-center">
                      <img src="@/assets/images/common/star_reviews.svg" alt="star">
                      <p class="ms-1">4,87 / 5</p>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          <!--progress-->
          <div class="container">
            <div class="my-carousel-progress">
              <div class="my-carousel-progress-bar"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!--/card-reviews--------------------------->


    <!--privilege------------------------------->
    <section class="privilege pt-3 pb-3 pt-lg-8 pb-lg-15">
      <div class="container">
        <div class="row text-center">
          <h5 class="fw-bold title text-center">Добро пожаловать в Академию будущего ХОД</h5>
        </div>

        <div class="row d-flex align-items-center mt-2 mt-lg-6">
          <div class="col-6 col-lg-3 mb-2 mb-lg-0">
            <div class="privilege__wrapper">
              <img class="mb-2 mb-lg-3" src="@/assets/images/common/pappers.png" alt="">
              <p class="fw-medium privilege__text">
                Передовой подход
                к образовательному процессу
              </p>
            </div>
          </div>

          <div class="col-6 col-lg-3 mb-2 mb-lg-0">
            <div class="privilege__wrapper">
              <img class="mb-2 mb-lg-3" src="@/assets/images/common/book.png" alt="">
              <p class="fw-medium privilege__text">
                Непрерывное усовершенствование
                и пополнение базы курсов
              </p>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="privilege__wrapper">
              <img class="mb-2 mb-lg-3" src="@/assets/images/common/planning.png" alt="">
              <p class="fw-medium privilege__text">
                Только практикующие преподаватели
              </p>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="privilege__wrapper">
              <img class="mb-2 mb-lg-3" src="@/assets/images/common/man.png" alt="">
              <p class="fw-medium privilege__text">
                Сопровождение на всех этапах. От начала обучения до трудоустройства
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!--/privilege------------------------------>

  </main>
</template>