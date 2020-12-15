<template>
  <div>
    <threls-policies-menu-component />
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
              md="8"
              offset-md="2"
              class="text-center">
            <h3>Cookie Policy</h3>
            <p>
              We use cookies to help improve your experience of {{ params.website }}. This cookie policy is part of {{
                params.entity
              }}'s privacy policy, and covers the use of cookies between your device and our site. We also provide basic
              information on third-party services we may use, who may also use cookies as part of their service, though
              they are not covered by our policy.
            </p>

            <div class="button-container mt-3">
              <b-button
                  size="md"
                  variant="primary"
                  @click="manageCookies">Manage Cookies
              </b-button>

            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
              md="8"
              offset-md="2"
              class="text-justify">
            <h4>What is a cookie?</h4>
            <p>A cookie is a small piece of data that a website stores on your device when you visit, typically
              containing information about the website itself, a unique identifier that allows the site to recognise
              your web browser when you return, additional data that serves the purpose of the cookie, and the lifespan
              of the cookie itself.</p>
            <p>Cookies are used to enable certain features (eg. logging in), to track site usage (eg. analytics), to
              store your user settings (eg. timezone, notification preferences), and to personalise your content (eg.
              advertising, language).</p>
            <p>Cookies set by the website you are visiting are normally referred to as “first-party cookies”, and
              typically only track your activity on that particular site. Cookies set by other sites and companies (ie.
              third parties) are called “third-party cookies”, and can be used to track you on other websites that use
              the same third-party service.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
              md="8"
              offset-md="2"
              class="text-justify">
            <h4>Types of cookies and how we use them</h4>
            <h5>Essential cookies</h5>
            <p>Essential cookies are crucial to your experience of a website, enabling core features like user logins,
              account management, shopping carts and payment processing. We use essential cookies to enable certain
              functions on our website.</p>
            <h5>Performance cookies</h5>
            <p>Performance cookies are used in the tracking of how you use a website during your visit, without
              collecting personal information about you. Typically, this information is anonymous and aggregated with
              information tracked across all site users, to help companies understand visitor usage patterns, identify
              and diagnose problems or errors their users may encounter, and make better strategic decisions in
              improving their audience’s overall website experience. These cookies may be set by the website you’re
              visiting (first-party) or by third-party services. We use performance cookies on our site.</p>
            <h5>Functionality cookies</h5>
            <p>Functionality cookies are used in collecting information about your device and any settings you may
              configure on the website you’re visiting (like language and timezone settings). With this information,
              websites can provide you with customised, enhanced or optimised content and services. These cookies may be
              set by the website you’re visiting (first-party) or by third-party service. We use functionality cookies
              for selected features on our site.</p>
            <h5>Targeting/advertising cookies</h5>
            <p>Targeting/advertising cookies are used in determining what promotional content is more relevant and
              appropriate to you and your interests. Websites may use them to deliver targeted advertising or to limit
              the number of times you see an advertisement. This helps companies improve the effectiveness of their
              campaigns and the quality of content presented to you. These cookies may be set by the website you’re
              visiting (first-party) or by third-party services. Targeting/advertising cookies set by third-parties may
              be used to track you on other websites that use the same third-party service. We use targeting/advertising
              cookies on our site.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
              md="8"
              offset-md="2"
              class="text-justify">
            <h4>Third-party cookies on our site</h4>
            <p>We may employ third-party companies and individuals on our websites—for example, analytics providers and
              content partners. We grant these third parties access to selected information to perform specific tasks on
              our behalf. They may also set third-party cookies in order to deliver the services they are providing.
              Third-party cookies can be used to track you on other websites that use the same third-party service. As
              we have no control over third-party cookies, they are not covered by this cookie policy.</p>
            <h5>Our third-party privacy promise</h5>
            <p>We review the privacy policies of all our third-party providers before enlisting their services to ensure
              their practices align with ours. We will never knowingly include third-party services that compromise or
              violate the privacy of our users.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
              md="8"
              offset-md="2"
              class="text-justify">
            <h4>How you can control or opt out of cookies</h4>
            <p>If you do not wish to accept cookies from us, you can instruct your browser to refuse cookies from our
              website. Most browsers are configured to accept cookies by default, but you can update these settings to
              either refuse cookies altogether, or to notify you when a website is trying to set or update a cookie.</p>
            <p>If you browse websites from multiple devices, you may need to update your settings on each individual
              device.</p>
            <p>Although some cookies can be blocked with little impact on your experience of a website, blocking all
              cookies may mean you are unable to access certain features and content across the sites you visit.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from "nuxt-property-decorator";

@Component({
  components: {}
})
export default class ThrelsCookieComponent extends Vue {

  get params() {
    return this.$threlsCookie.params
  }

  @Emit('manage')
  manageCookies(){

  }
}
</script>

