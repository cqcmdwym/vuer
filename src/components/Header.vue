<template>
  <header class="Header clearfix">
      <nav>
        <ul class="nav nav-pills pull-right">
          <li role="presentation">
            <router-link to="/">Play</router-link>
          </li>
          <li role="presentation">
            <router-link to="/state">State</router-link>
          </li>
      </ul>
      <h3 class="text-muted Header__title">A mini demo</h3>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.Header {
  padding: 15px 15px 20px 15px;
  border-bottom: 1px solid #e5e5e5;
}

.Header__title {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 40px;
}

.Header .router-link-exact-active {
  background: gainsboro;
}
</style>
