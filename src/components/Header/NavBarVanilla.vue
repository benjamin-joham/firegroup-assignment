<template>
  <nav class="navbarsi">
    <div class="logo-collapsed brand">
      <img class="brand" src="@/assets/logo.png" alt="Brand Logo" />
    </div>
    <ul class="nav-list">
      <li class="list-item"><a href="">Watches</a></li>
      <li class="list-item"><a href="">Jewellery</a></li>
      <li class="list-item"><a href="">Wedding</a></li>
      <li class="list-item logo-expanded">
        <a href="">
          <img class="brand" src="@/assets/logo.png" alt="Brand Logo" />
        </a>
      </li>
      <li class="list-item"><a href="">Academy</a></li>
      <li class="list-item"><a href="">Company</a></li>
      <li class="list-item"><a href="">Stores</a></li>
    </ul>
    <div class="menu">
      <div class="menu-line"></div>
      <div class="menu-line"></div>
      <div class="menu-line"></div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbarsi {
  background-color: white;
  //   background-color: var(--color-accent);
  color: var(--color-text-white);
  //   display: flex;
  //   justify-content: space-around;
  //   align-items: center;

  .logo-collapsed {
    display: none;
  }
  .logo-expanded {
    display: block;
  }
}

.nav-list {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
}

.list-item {
  display: inline-block;
  padding: 20px 10px;
}

.brand {
  height: 1.5rem;
}

.menu {
  display: none;
}
.menu-line {
  width: 1.5rem;
  height: 0.25rem;
  background-color: var(--color-accent);
  margin-bottom: 0.25rem;
}

@media (max-width: 992px) {
  .navbarsi {
    flex-direction: column;
    .logo-collapsed {
      display: block;
    }
    .list-item {
      display: block;
      border: 1px solid white;
    }

    .logo-expanded {
      display: none;
    }
    .menu {
      display: block;
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
    }
    .nav-list {
      width: 100%;
      text-align: center;
      padding-top: 1rem;
      display: none;
    }
  }
}
</style>
