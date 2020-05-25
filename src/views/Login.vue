<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-form ref="loginForm" @submit.prevent="login">
      <v-card-title class="display-1">Login</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="user.email"
          :rules="emailRules"
          color="success"
          prepend-icon="mdi-account-circle"
          label="E-mail"
          required
        />

        <v-text-field
          v-model="user.password"
          :rules="passwordRules"
          :type="showPassword ? 'text' : 'password'"
          color="success"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          label="Password"
          required
        />
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn color="success" type="submit">Login</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import titleMixin from '@/mixins/titleMixin'

export default {
  mixins: [titleMixin],

  title() {
    return 'Login'
  },

  data: () => ({
    user: {
      email: '',
      password: ''
    },
    showPassword: false,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [v => !!v || 'Password is required']
  }),

  methods: {
    async login() {
      if (this.$refs.loginForm.validate()) {
        const response = await this.$store.dispatch('user/login', this.user)
        if (response) this.$router.push({ name: 'Secret' })
      }
    }
  }
}
</script>
