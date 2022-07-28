<template>
  <main>
    <h1>Register</h1>
    <small class="mb-4">Fill the required fields to create an account</small>
    <form @submit.prevent="register">
      <div class="mb-3 form-group">
        <label for="email-address" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          :class="{
            'is-valid': shouldAppendValidClass($v.user.email),
            'is-invalid': shouldAppendErrorClass($v.user.email),
          }"
          id="email-address"
          aria-describedby="emailHelp"
          v-model="user.email"
          @blur="$v.user.email.$touch()"
        />
        <div v-if="$v.user.email.$error" class="text-danger mt-1">
          <div v-if="!$v.user.email.required" class="error-message">
            <small>The email field is required</small>
          </div>
          <div v-if="!$v.user.email.email" class="error-message">
            <small>Invalid email address</small>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          :class="{
            'is-valid': shouldAppendValidClass($v.user.name),
            'is-invalid': shouldAppendErrorClass($v.user.name),
          }"
          id="username"
          aria-describedby="emailHelp"
          v-model="user.name"
          @blur="$v.user.name.$touch()"
        />
        <div v-if="$v.user.name.$error" class="text-danger mt-1">
          <div v-if="!$v.user.name.required" class="error-message">
            <small>This username field is required</small>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          :class="{
            'is-valid': shouldAppendValidClass($v.user.password),
            'is-invalid': shouldAppendErrorClass($v.user.password),
          }"
          id="password"
          v-model="user.password"
          @blur="$v.user.password.$touch()"
        />
        <div v-if="$v.user.password.$error" class="text-danger mt-1">
          <div v-if="!$v.user.password.required" class="error-message">
            <small>This password field is required</small>
          </div>
          <div v-if="!$v.user.password.minLengthValue" class="error-message">
            <small>The password must have at least 8 characters</small>
          </div>
          <div v-if="!$v.user.password.containsUppercase" class="error-message">
            <small>The password must have at least 1 uppercase character</small>
          </div>
          <div v-if="!$v.user.password.containsLowercase" class="error-message">
            <small>The password must have at least 1 lowercase character</small>
          </div>
          <div v-if="!$v.user.password.containsNumber" class="error-message">
            <small>The password must have at least 1 digit</small>
          </div>
          <div v-if="!$v.user.password.containsSpecial" class="error-message">
            <small>The password must have at least 1 special character</small>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <label for="confPassword" class="form-label">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="confPassword"
          v-model="confPassword"
        />
        <div v-if="status === 'PASSWORD_ERROR'" class="text-danger mt-1">
          <div class="error-message">
            <small>{{ msg }}</small>
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-primary w-100"
        :disabled="status === 'LOADING' ? true : false"
      >
        Register
      </button>
    </form>
    <section class="mt-5">
      <i
        >Already have an account?
        <router-link to="/login">Login</router-link></i
      >
    </section>
  </main>
</template>

<script>
import Vue from "vue";
import { register } from "@/services/auth";
import { required, email, minLength } from "vuelidate/lib/validators";
import config from "@/config";

export default {
  name: "AppRegister",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      confPassword: "",
      status: "",
      msg: "",
    };
  },
  validations() {
    return {
      user: {
        name: {
          required,
        },
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
    async register() {
      this.$v.user.$touch();
      if (!this.$v.user.$invalid) {
        this.status = "LOADING";
        if (this.user.password !== this.confPassword) {
          this.status = "PASSWORD_ERROR";
          this.msg = "Password and Confirm Password does not match.";
          return;
        }

        const response = await register(this.user);

        if (response !== "success") {
          Vue.$toast.error(
            "There was some error while registering your account.",
            {
              duration: config.toastDuration,
            }
          );
          return;
        }

        this.status = "LOADED";

        Vue.$toast.success("Registration Successfull.", {
          duration: config.toastDuration,
        });

        this.$router.push("login");
      } else {
        console.log("invalid input values");
      }
    },
    shouldAppendValidClass(field) {
      return !field.$invalid && field.$model && field.$dirty;
    },
    shouldAppendErrorClass(field) {
      return field.$error;
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
