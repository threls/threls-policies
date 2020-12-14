<template>
  <section class="pb-0">
    <b-container>
      <b-row>
        <b-col
          class="text-center py-4"
          md="8"
          offset-md="2">
          <b-nav
            pills
            align="center"
            >
            <b-nav-item to="/policies/privacy" active-class="active">Privacy Policy</b-nav-item>
            <b-nav-item to="/policies/terms" active-class="active">Terms of Service</b-nav-item>
            <b-nav-item to="/policies/cookie" active-class="active">Cookie Policy</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
section {
  background: #f9f9f9;
}
</style>
