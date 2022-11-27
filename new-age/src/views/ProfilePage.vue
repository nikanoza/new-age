<template></template>

<script>
import { getUser } from "../services";
export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      const storeToken = this.$store.getters["getToken"];
      let token;
      if (storeToken) {
        token = storeToken;
      } else {
        const cookieToken = this.$cookies.get("token");
        if (!cookieToken) {
          this.$router.push("/sign-up");
        }
        token = cookieToken;
        this.$store.dispatch("setToken", token);
      }
      const { data } = await getUser(token);
      this.$store.dispatch("setUser", data);
      this.user = data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "profile.scss";
</style>
