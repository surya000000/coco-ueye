import Vue from 'vue';
import FullCalendar from '@/components/full-calendar';
import { storiesOf } from '@storybook/vue';
import '@/styles/index.scss';

storiesOf('FullCalendar', module).add('Full Calendar', () => ({
    render: h => <FullCalendar />
}));
