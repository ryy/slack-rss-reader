Vue.component('article-card', {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  created() {
    this.article.ago = dayjs().to(dayjs.unix(this.article.ts))
  },
  render(h) {
    return h('div', { 
      staticClass: 'p-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4'
    }, [
      h('a', {
        attrs: {
          href: this.article.attachments[0].title_link,
          target: '_blank'
        }
      }, [
        h('div', { 
          staticClass: 'rounded-lg overflow-hidden border border-gray-800'
        }, [
          this.article.attachments[0].image_url && h('img', {
            staticClass: 'lg:h-32 md:h-24 w-full object-cover object-center',
            attrs: {
              src: this.article.attachments[0].image_url,
              alt: this.article.attachments[0].title
            }
          }),
          h('div', { 
            staticClass: 'pt-6 pr-6 pl-6 pb-4 bg-gray-900 rounded-l-sm'
          }, [
            h('h3', { 
              staticClass: 'card-title title-font font-medium text-white mb-6'
            }, [
              h('span', {
                staticClass: 'text-sm'
              }, [
                this.article.attachments[0].title.length > 60
                  ? this.article.attachments[0].title.substring(0, 60) + '...'
                  : this.article.attachments[0].title
              ])
            ]),
            h('div', {
              staticClass: 'border-solid border-b border-gray-800'
            }),
            h('div', {
              staticClass: 'text-left pt-3'
            }, [
              h('div', {
                staticClass: 'flex items-center'
              }, [
                this.article.attachments[0].service_icon && h('img', {
                  staticClass: 'h-5 w-5 float-left rounded-sm',
                  attrs: {
                    src: this.article.attachments[0].service_icon
                  }
                }),
                h('p', {
                  staticClass: 'pl-1 text-xs'
                }, [
                  this.article.username
                ])
              ])
            ]),
            h('div', {
              staticClass: 'text-right pt-3'
            }, [
              h('p', {
                staticClass: 'text-xs'
              }, [
                this.article.ago
              ])
            ])
          ])
        ])
      ])
    ])
  }
})