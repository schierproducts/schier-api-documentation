<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import Page from '@theme/components/Page.vue'

export default {
    extends: Page,
    components: { PageEdit, PageNav },
    props: ['sidebarItems'],
}
</script>
