import Vue from 'vue';
import Card from '@/components/card';
import { storiesOf } from '@storybook/vue';

const lists = {
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Breathe_%28Web_series%29_poster.jpg/220px-Breathe_%28Web_series%29_poster.jpg",
        label: "Sudhir Sapkota",
        value: 20,
        desc: "<ul><li>15 task pending</li><li>25 task Remaining</li></ul>",
    };

storiesOf('Card', module).add('Simple Card', () => ({
    render: h => <Card lists={lists} />
}));
