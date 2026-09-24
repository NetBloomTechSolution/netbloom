<template>
   <footer>
     <div :class="`tp-footer-area ${topCls}`" :style="bgColor ? { backgroundColor: bgColor } : {}">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-xl-4 col-lg-4">
                  <div class="tp-footer-widget tp-footer-col-1 pb-40 tp_fade_anim" data-delay=".3">
                      <h4 class="tp-footer-widget-title">Helping <br> start-ups scale & grow.</h4>
                      <div class="tp-footer-widget-social">
                         <a href="#">
                            <span>
                                <svg-social-fb-three/>
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <svg-social-x-three/>
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <svg-social-dribble-two/>
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <svg-social-instagram-two/>
                            </span>
                        </a>
                      </div>
                  </div>
              </div>
              <div class="col-xl-5 col-lg-4 col-md-6">
                  <div class="tp-footer-widget tp-footer-col-2 pb-40 tp_fade_anim" data-delay=".5">
                      <h4 class="tp-footer-widget-title-sm pre mb-25">Quick links</h4>
                      <div class="tp-footer-widget-menu">
                          <ul>
                              <li><nuxt-link to="/about">About us</nuxt-link></li>
                              <li><nuxt-link to="/services">Services</nuxt-link></li>
                              <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
                              <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                              <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="tp-footer-widget tp-footer-col-3 pb-40 mb-30 tp_fade_anim" data-delay=".7">
                      <h4 class="tp-footer-widget-title-sm pre mb-20">Contact</h4>
                      <div class="tp-footer-widget-info">
                          <a href="mailto:netblooms@studio.com">netblooms@studio.com</a>
                      </div>
                      <div class="tp-footer-widget-info">
                          <a href="https://maps.google.com/?q=Bhopal,+Madhya+Pradesh,+India" target="_blank">
                            Bhopal, Madhya Pradesh <br> India
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
     </div>

     <!-- footer copyright -->
     <footer-copyright :bg-color="bgColor" />
     <!-- footer copyright -->
   </footer>
</template>

<script setup lang="ts">
withDefaults(defineProps<{topCls?: string;bgColor?: string}>(), {
    topCls: 'pt-160 pb-35',
    bgColor:''
})
</script>