Vue.component('article-card', {
  props: ['article'],
  created() {
    this.article.ago = dayjs().to(dayjs.unix(this.article.ts))
  },
  template:
      '<div class="p-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">' +
        '<a name="article-card" :href="article.attachments[0].title_link" target="_blank"">' +
          '<div class="rounded-lg overflow-hidden border border-gray-800">' +
            '<img class="lg:h-32 md:h-24 w-full object-cover object-center" :src="article.attachments[0].image_url" :alt="article.attachments[0].title">' +
            '<div class="pt-6 pr-6 pl-6 pb-4 bg-gray-900 rounded-l-sm">' +
              '<h3 class="card-title title-font font-medium text-white mb-6"><span class="text-sm">{{article.attachments[0].title | truncate(60)}}</span></h3>' +
              '<div class="border-solid border-b border-gray-800"></div>' +
                '<div class="text-left pt-3">' +
                  '<div class="flex items-center">' +
                    '<img :src="article.attachments[0].service_icon" class="h-5 w-5 float-left rounded-sm">' +
                    '<p class="pl-1 text-xs">{{article.username}}</p>' +
                  '</div>' +
                '</div>' +
                '<div class="text-right pt-3">' +
                  '<p class="text-xs">{{ article.ago }}</p>' +
                '</div>' +
              '</div>' +
            '</div>' +
        '</a>' +
      '</div>'
});