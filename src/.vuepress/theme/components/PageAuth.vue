<template>
  <main class="page">
    <slot name="top" />

      <div v-if="user || isDev">
        <Content class="theme-default-content" />
        <PageEdit />
      </div>

      <div class="theme-default-content content__default" v-else>
          <h1>Content Protected</h1>
          <p>In order to view this content, please login to continue</p>
          <LoginButton :client="auth0client" @login-complete="getUser()" />
      </div>

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import Page from '@theme/components/Page.vue'
import LoginButton from "../../components/LoginButton";
import Authentication from "../../mixins/Authentication";

export default {
    extends: Page,
    mixins: [ Authentication ],
    components: {LoginButton, PageEdit, PageNav },
    props: ['sidebarItems'],
    computed: {
        isDev() {
            if (window) {
                return window.webpackHotUpdate !== undefined;
            }
            return false;
        }
    }
}
</script>
