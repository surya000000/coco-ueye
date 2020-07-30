import Vue from 'vue';
import FullCalendar from '@/components/full-calendar';
import Input from '@/components/input';
import { storiesOf } from '@storybook/vue';

storiesOf('Input', module).add('Text input', () => ({
    render: h => <Input />
}));
