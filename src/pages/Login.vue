<template>
  <main>
    <h1>Login</h1>
    <small class="mb-4">Please enter your login email and password</small>
    <form @submit.prevent="login">
      <div class="mb-3 form-group">
        <label for="email-address" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email-address"
          aria-describedby="emailHelp"
          v-model="form.email"
          @blur="$v.form.email.$touch()"
        />
        <div v-if="$v.form.email.$error" class="text-danger mt-1">
          <div v-if="!$v.form.email.required" class="error-message">
            <small>This email field is required</small>
          </div>
          <div v-if="!$v.form.email.email" class="error-message">
            <small>Invalid email address</small>
          </div>
        </div>
      </div>
      <div class="mb-4 form-group">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="form.password"
          @blur="$v.form.password.$touch()"
        />
        <div v-if="$v.form.password.$error" class="text-danger mt-1">
          <div v-if="!$v.form.password.required" class="error-message">
            <small>This password field is required</small>
          </div>
          <div v-if="!$v.form.password.minLengthValue" class="error-message">
            <small>The password must have at least 8 characters</small>
          </div>
          <div v-if="!$v.form.password.containsUppercase" class="error-message">
            <small>The password must have at least 1 uppercase character</small>
          </div>
          <div v-if="!$v.form.password.containsLowercase" class="error-message">
            <small>The password must have at least 1 lowercase character</small>
          </div>
          <div v-if="!$v.form.password.containsNumber" class="error-message">
            <small>The password must have at least 1 digit</small>
          </div>
          <div v-if="!$v.form.password.containsSpecial" class="error-message">
            <small>The password must have at least 1 special character</small>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary w-100" :disabled="loading">
        Login
      </button>
    </form>
    <section class="mt-5">
      <i
        >Don't have an account?
        <router-link to="/register">Register</router-link></i
      >
    </section>
  </main>
</template>

<script>
import Vue from "vue";
import config from "@/config";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "AppLogin",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          minLengthValue: minLength(8),
          containsUppercase: function (value) {
            return /[A-Z]/.test(value);
          },
          containsLowercase: function (value) {
            return /[a-z]/.test(value);
          },
          containsNumber: function (value) {
            return /[0-9]/.test(value);
          },
          containsSpecial: function (value) {
            return /[#?!@$%^&*-]/.test(value);
          },
        },
      },
    };
  },
  methods: {
    async login() {
      this.$v.form.$touch();
      this.loading = true;
      if (!this.$v.form.$invalid) {
        let response = await this.$store.dispatch("login", this.form);

        if (response.status === 200) {
          Vue.$toast.success(`Hii! ${response.name}, login successfull!!`, {
            duration: config.toastDuration,
          });
          this.$router.push("/");
        } else {
          Vue.$toast.error(response.message || "There was an error", {
            duration: config.toastDuration,
          });
          this.loading = false;
        }
      } else {
        Vue.$toast.error("Invalid input values!!", {
          duration: config.toastDuration,
        });
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
main {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
}

form {
  width: 400px;
}

form button {
  background-color: #4493c2;
  color: #fff;
}
</style>
