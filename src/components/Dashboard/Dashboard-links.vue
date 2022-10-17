<template>
  <div class="col-lg-4 col-md-4 col-sm-4">
    <div class="my-account">
      <div class="user-avatar bg-lightgrey-black">
        <div class="profile-pic-text-area">
          <div class="_text-area">A</div>
        </div>                        <p>Admin</p>
      </div>
      <div class="dashboard-menu">
        <ul>
          <li class=""><router-link to="/edit-profile">Edit profile</router-link></li>
          <li class=""><a href="/my-dashboard/my-nieuws">My favorite nieuws</a></li>
          <li class=""><a href="/my-dashboard/my-comments">My reacties</a></li>
          <li><a href="/user/logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard-links"
}
</script>

<style scoped>

</style>