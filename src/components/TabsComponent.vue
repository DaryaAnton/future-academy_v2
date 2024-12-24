<template>
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
          data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
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
          data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
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

      </div>

      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
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
      </div>

      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
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
      </div>

    </div>
  </div>
</template>