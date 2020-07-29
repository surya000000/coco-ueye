import Vue from 'vue';
import FullCalendar from '@/components/full-calendar';
import { storiesOf } from '@storybook/vue';

storiesOf('FullCalendar', module).add('Full Calendar', () => ({
    render: h => <FullCalendar />
}));
