<template>
    <div :class="['coco-ui-grid', showHeader ? 'with-header' : '']">
        <div
            @click="e => $emit('on-column-click', { dayNumber, index }, e)"
            v-for="(dayNumber, index) in totalDays"
            :key="dayNumber"
            :class="[activeDayNumber === dayNumber  ? 'active' : '', `full-calendar-day-number day-${dayNumber}`]"
        >
            <div
                class="header"
                v-if="showHeader"
                @click="(e) => onheaderClick(dayNumber, e)"
            >
                <p>
                    {{ dayNumber }}
                </p>
                <p>
                    {{ getDayName(dayNumber) }}
                </p>
            </div>
            <div
                class="event"
                v-for="event in getDateEvents(dayNumber)"
                :key="event.label"
                :style="{ ...event.styles, width: `${event.numberOfDays * 100}%` }"
            >
                {{ event.label }}
                <span class="event-icon">
                    {{ event.icon }}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { isJSON, flatMap } from "ui-helpers";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dateEventsInterface = {
    data: { from: new Date(), to: new Date() },
    events: [],
};

const eventInterface = {
    eventGroup: "",
    styles: {
        height: "8px",
    },
};

export default {
    name: "Calendar",
    data() {
        return {
            activeDayNumber: null,
            traversedHistory: [],
        };
    },
    props: {
        year: {
            type: [String, Number],
            default: new Date().getFullYear(),
        },
        month: {
            type: [String, Number],
            default: new Date().getMonth(),
        },
        showHeader: {
            type: Boolean,
            default: true,
        },
        dateEvents: {
            type: Array,
            default: () => [],
        }
    },
    computed: {
        defaultStyles() {
            return eventInterface.styles;
        },
        eventGroupNames() {
            return flatMap(this.dateEvents, "events.groupName");
        },
        totalDays() {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
            // geMonth returns from 0 index
            return new Date(this.year, this.month + 1, 0).getDate();
        },
    },
    methods: {
        onheaderClick(dayNumber, e) {
            this.activeDayNumber = dayNumber;
            this.$emit("on-header-click", this.activeDayNumber);
        },
        getDateEvents(dayNumber) {
            const currentDate = new Date(this.year, this.month, dayNumber);
            let numberOfDays = 1;
            const currentDateEvents = this.dateEvents.find(data => {
                let fromDate = new Date();
                let toDate = new Date();
                if (isJSON(data.date)) {
                    fromDate = new Date(data.date.from);
                    toDate = new Date(data.date.to);
                    numberOfDays = Math.floor((toDate - fromDate)/(3600000 * 24)) + 1;
                    return currentDate >= fromDate && currentDate <= toDate;
                }
                return new Date(data.date) === currentDate;

            }) || dateEventsInterface;
            // filter out already traversed events using traversedHistory
            const events = currentDateEvents.events
                .filter(event => !this.traversedHistory.includes(event.id))
                .map(event => ({ ...event, numberOfDays }));
            this.insertEventsToTraversal(events);
            return events;
        },
        insertEventsToTraversal(events) {
            // create a history array with unique id of traversed events
            this.traversedHistory = [...this.traversedHistory, ...events.map(event => event.id)];
            this.traversedHistory = Array.from(
                new Set([...this.traversedHistory, ...events.map(event => event.id)])
            );
        },
        getDayName(dayNumber) {
            const dayIndex = new Date(this.year, this.month, dayNumber).getDay();
            return weekday[dayIndex];
        },
    }
};
</script>
