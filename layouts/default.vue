<template>
  <div class="font-main flex flex-wrap justify-around">
    <header class="w-64 h-64">
      <div class="w-64 mt-24 ml-2 relative md:fixed">
        <div class="flex">
          <div
            class="bg-center bg-cover w-16 h-16 mr-2 rounded-full shadow photo"
          ></div>
          <div>
            <h1 class="font-bold">Kyo Yasuhisa</h1>
            <p class="text-xs text-justify">
              フロントエンドエンジニアかな？<br />
              Vueが苦手です。UIUXファースト。
            </p>
          </div>
        </div>
        <div class="flex justify-around mt-5 text-xs">
          <nuxt-link to="/">
            <button>
              <fa-layers full-width class="fa-2x block mx-auto mb-1">
                <fa :icon="faCode" />
              </fa-layers>
              Works
            </button>
          </nuxt-link>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <button>
              <fa-layers full-width class="fa-2x block mx-auto mb-1">
                <fa :icon="faTwitter" />
              </fa-layers>
              Twitter
            </button>
          </a>
          <a
            href="https://github.com/si-zerodarkthirty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <fa-layers full-width class="fa-2x block mx-auto mb-1">
                <fa :icon="faGithub" />
              </fa-layers>
              GitHub
            </button>
          </a>
        </div>
      </div>
    </header>
    <main class="w-full mt-10">
      <nuxt />
    </main>
  </div>
</template>

<script>
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
export default {
  computed: {
    faTwitter() {
      return faTwitter
    },
    faGithub() {
      return faGithub
    },
    faCode() {
      return faCode
    },
  },
}
</script>

<style>
main {
  max-width: 550px;
}
.photo {
  min-width: 4rem;
  min-height: 4rem;
}
button:focus {
  outline: none;
}
</style>
