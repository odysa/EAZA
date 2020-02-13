import { link } from '../mixins/link';
import { VantComponent } from '../common/component';
VantComponent({
    classes: [
        'num-class',
        'desc-class',
        'thumb-class',
        'title-class',
        'aRate-class',
        'origin-gpa-class',
    ],
    mixins: [link],
    props: {
        tag: String,
        num: String,
        desc: String,
        thumb: String,
        title: String,
        aRate: String,
        centered: Boolean,
        lazyLoad: Boolean,
        thumbLink: String,
        originGpa: String,
        thumbMode: {
            type: String,
            value: 'aspectFit'
        },
        currency: {
            type: String,
            value: 'A率：'
        }
    },
    methods: {
        onClickThumb() {
            this.jumpLink('thumbLink');
        }
    }
});
