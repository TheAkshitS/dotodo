<template>
  <v-container>
    <h2 class="title">{{ $t('settings.settings') | capitalize }}</h2>
    <v-row>
      <v-col>
        <h3 class="subtitle-2 my-3">
          <v-icon left small>mdi-theme-light-dark</v-icon
          >{{ $t('settings.theme') | capitalize }}
        </h3>

        <v-btn-toggle
          :value="isDarkTheme"
          dense
          mandatory
          rounded
          @change="changeTheme"
        >
          <v-btn v-for="theme in themes" :key="theme.name" :value="theme.name">
            <v-icon>{{ theme.icon }}</v-icon>
          </v-btn>
        </v-btn-toggle>

        <v-col sm="3">
          <h3 class="subtitle-2 mt-5 my-3">
            <v-icon left small>mdi-translate</v-icon
            >{{ $t('settings.language') | capitalize }}
          </h3>
          <v-select
            v-model="selectedLanguage"
            :items="languages"
            dense
            color="success"
            item-color="success"
            item-text="name"
            item-value="abbrivation"
            :label="`${$t('settings.language')}`"
            outlined
            class="mt-4"
          />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import titleMixin from '@/mixins/titleMixin'

export default {
  mixins: [titleMixin],

  title() {
    return 'Settings'
  },

  data: () => ({
    themes: [
      { name: 'light', icon: 'mdi-brightness-7' },
      { name: 'dark', icon: 'mdi-brightness-4' }
    ],

    languages: [
      { name: 'English', abbrivation: 'en' },
      { name: 'French', abbrivation: 'fr' }
    ]
  }),

  computed: {
    isDarkTheme: {
      immediate: true,
      get() {
        return this.$store.state.ui.darkTheme ? 'dark' : 'light'
      }
    },
    selectedLanguage: {
      immediate: true,
      get() {
        return this.$store.state.ui.selectedLanguage
      },
      set(value) {
        this.$store.dispatch('ui/changeLanguage', value)
        this.$i18n.locale = value
      }
    }
  },

  methods: {
    changeTheme() {
      this.$store.dispatch('ui/changeTheme', this.$vuetify.theme.dark)
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
