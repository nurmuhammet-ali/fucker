import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-dynamicjson', IndexField)
  app.component('detail-dynamicjson', DetailField)
  app.component('form-dynamicjson', FormField)
})
