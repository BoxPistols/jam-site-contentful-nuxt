<template>
  <div>
    <div v-for="work in works" :key="work.sys.id">
      <p>
        work.fields.category.fields.name<br />
        {{ work.fields.category.fields.name }}
      </p>
      <h3>work.fields.title{{ work.fields.title }}</h3>
      <h4>work.fields.subtitle{{ work.fields.subtitle }}</h4>
      <div>
        <li v-for="tag in work.fields.tag" :key="tag.sys.id">
          {{ tag.fields.name }}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful'
const client = createClient()

export default {
  asyncData() {
    return Promise.all([
      client.getEntries({
        content_type: 'work', // workタイプの記事データを全取得
        order: '-sys.createdAt', // 作成日時順に並べる
      }),
    ])
      .then(([works]) => {
        return {
          works: works.items, // 取得したデータを配列worksに入れる
        }
      })
      .catch(console.error)
  },
}
</script>
