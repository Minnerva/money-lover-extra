import LayoutDefault from '@layouts/Default'

import ViewIndex from '@views/Index'
import ViewUpload from '@views/Upload'
import ViewGroup from '@views/Group'
import ViewError404 from '@views/error/404'

export default [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      { path: '', name: 'index', component: ViewIndex },
      { path: 'upload', name: 'upload', component: ViewUpload },
      { path: 'group/:group', name: 'group', component: ViewGroup }
    ]
  },
  { path: '*', component: ViewError404 }
]
