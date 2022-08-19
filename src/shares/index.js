import BaseLayout from './layout/BaseLayout'
import ErrorMessageBox from './components/ErrorMessageBox'
import LoadingAnimation from './components/LoadingAnimation'
import ImplementingBox from './components/ImplementingBox'
import EmptyDataBox from './components/EmptyDataBox'

import TitleInput from './components/content-editor/TitleInput'
import SubTitleInput from './components/content-editor/SubTitleInput'
import TextInput from './components/content-editor/TextInput'
import ImageInput from './components/content-editor/ImageInput'

import TitleView from './components/content-editor/TitleView'
import SubTitleView from './components/content-editor/SubTitleView'
import TextView from './components/content-editor/TextView'
import ImageView from './components/content-editor/ImageView'

import DateFilter from './filters/date.filter'

export default {
    components: [BaseLayout, ErrorMessageBox, LoadingAnimation, ImplementingBox, EmptyDataBox, TitleInput, SubTitleInput, TextInput, ImageInput, TitleView, SubTitleView, TextView, ImageView],
    filters: {
        date: DateFilter,
    },
}
