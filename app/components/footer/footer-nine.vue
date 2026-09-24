<template>
  <footer>
    <!-- footer area start -->
     <div class="app-footer-area pt-100 pb-60" :style="{ backgroundColor: isDark ? '#151619' : '#fff' }">
        <div class="container container-1230">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 mb-40">
                    <div class="dgm-footer-widget app-footer-col-1 z-index-1">
                        <div class="dgm-footer-logo mb-30">
                            <nuxt-link href="/">
                              <img v-if="!isDark" data-width="120px" src="/img/logo/logo-black.png" alt="logo" width="120">
                              <img v-if="isDark" data-width="120px" src="/img/logo/logo-white.png" alt="logo" width="120">
                            </nuxt-link>
                        </div>
                        <div class="dgm-footer-widget-paragraph mb-35">
                            <p>Next-gen startup digital agency creating <br> user-friendly products and growth solutions.</p>
                        </div>
                        <div class="app-footer-rating">
                            <div class="app-hero-bottom-rating">
                                <div class="app-hero-bottom-rating-point">
                                    <span>4.9</span>
                                </div>
                                <div class="app-hero-bottom-rating-star">
                                    <div class="app-hero-bottom-rating-stars">
                                        <span><svg-star-seven /></span>
                                        <span><svg-star-seven /></span>
                                        <span><svg-star-seven /></span>
                                        <span><svg-star-seven /></span>
                                        <span><svg-star-seven /></span>
                                    </div>
                                    <a href="#">Based on 150+ Reviews <svg-arrow-down-two />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2  col-md-3 mb-40">
                    <div class="dgm-footer-widget app-footer-widget app-footer-col-2">
                        <h4 class="dgm-footer-widget-title">Company</h4>
                        <div class="dgm-footer-widget-menu">
                            <ul>
                                <li><nuxt-link to="/about">About us</nuxt-link></li>
                                <li><nuxt-link to="/services">Services</nuxt-link></li>
                                <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
                                <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                                <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-4 mb-40">
                    <div class="dgm-footer-widget app-footer-widget app-footer-col-3">
                        <h4 class="dgm-footer-widget-title">Get In Touch</h4>
                        <div class="app-footer-widget-info mb-20">
                            <div class="app-footer-widget-info-title">Need live support?</div>
                            <a class="tp-line-black" href="mailto:netblooms@studio.com">netblooms@studio.com</a>
                        </div>

                        <div class="app-footer-widget-info">
                            <div class="app-footer-widget-info-title">Find us:</div>
                            <a class="tp-line-black" href="https://maps.google.com/?q=Bhopal,+Madhya+Pradesh,+India" target="_blank">Bhopal, Madhya Pradesh India</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-5 mb-40">
                    <div class="dgm-footer-widget app-footer-widget app-footer-col-4-custom z-index-1">
                        <h4 class="dgm-footer-widget-title">Newsletter</h4>
                        <div class="dgm-footer-widget-paragraph color-style mb-25">
                            <p>Subscribe to get the latest agency insights and news.</p>
                        </div>
                        <div class="footer-newsletter-wrapper">
                            <form class="footer-newsletter-form" @submit.prevent>
                                <input
                                    type="email"
                                    class="footer-newsletter-input"
                                    :class="{ 'dark-mode': isDark }"
                                    placeholder="Enter your email"
                                    required
                                >
                                <button type="submit" class="footer-newsletter-btn">
                                    <span>Send</span>
                                    <svg-plane-two />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    <!-- footer area end -->

    <!-- copyright area start -->
     <div class="tp-copyright-app-area tp-copyright-2-border app-copyright-border" :style="{ backgroundColor: isDark ? '#151619' : '#fff' }">
        <div class="container container-1430">
            <div class="row align-items-center">
                <div class="col-12">
                    <div class="app-copyright-text text-center z-index-1">
                        <p>© {{new Date().getFullYear()}} Copyrights by Netbloom Co. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
    <!-- copyright area end -->
  </footer>
</template>
<script setup lang="ts">
const {isDark} = useIsDark();
</script>

<style scoped lang="scss">
.app-footer-col-4-custom {
  padding-left: 0 !important;
}

.footer-newsletter-wrapper {
  position: relative;
  width: 100%;
}

.footer-newsletter-form {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.footer-newsletter-input {
  width: 100%;
  height: 54px;
  border-radius: 27px;
  padding: 0 100px 0 20px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid rgba(33, 33, 45, 0.12);
  background: #ffffff;
  color: #151619;
  outline: none;
  transition: all 0.25s ease;

  &::placeholder {
    color: #8c8f96;
    font-size: 14px;
  }

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
  }

  &.dark-mode {
    background: #1e1f23;
    border-color: rgba(255, 255, 255, 0.14);
    color: #ffffff;

    &::placeholder {
      color: #92959c;
    }

    &:focus {
      border-color: #a855f7;
      box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
    }
  }
}

.footer-newsletter-btn {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  height: 44px;
  padding: 0 18px;
  border-radius: 22px;
  border: none;
  background: linear-gradient(108deg, #5b5ff5 0%, #a453f6 50%, #f77042 100%);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-50%) scale(1.02);
    box-shadow: 0 4px 14px rgba(164, 83, 246, 0.35);
  }

  :deep(svg) {
    width: 15px;
    height: 15px;
  }
}
</style>