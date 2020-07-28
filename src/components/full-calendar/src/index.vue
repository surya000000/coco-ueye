<template>
    <div class="coco-ui-grid">
        <div
            v-for="dayNumber in totalDays"
            class="full-calendar-day-number"
        >
            <p>
                {{ dayNumber }}
            </p>
            <p>
                {{ getDayName(dayNumber) }}
            </p>
            <div
                class="event"
                v-for="event in getDateEvents(dayNumber)"
                :style="Object.assign(defaultStyles, event.styles || {})"
            >
            </div>
        </div>
    </div>
</template>
<script>
import { isJSON, flatMap } from "cocouiHelpers";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dateEventsInterface = {
    data: { from: new Date(), to: new Date() },
    events: [],
};

const eventInterface = {
    eventGroup: "",
    styles: {
        height: "12px",
        borderRadius: "10px"
    },
};

const dateEvents = [{
    date: { from: "2020/07/28", to: "2020/07/30" },
    events: [{
        groupName: "Tasks",
        styles: {
            backgroundColor: "#23a9f6",
        }
    }]
}];

export default {
    name: "FullCalendar",
    props: {
        year: {
            type: [String, Number],
            default: new Date().getFullYear(),
        },
        month: {
            type: [String, Number],
            default: new Date().getMonth(),
        },
        dateEvents: {
            type: Array,
            default: () => dateEvents,
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
        getDateEvents(dayNumber) {
            const currentDate = new Date(this.year, this.month, dayNumber);
            const currentDateEvents = this.dateEvents.find(data => {
                let fromDate = new Date();
                let toDate = new Date();
                if (isJSON(data.date)) {
                    fromDate = new Date(data.date.from);
                    toDate = new Date(data.date.to);
                }
                return currentDate >= fromDate && currentDate <= toDate;
            }) || dateEventsInterface;

            return currentDateEvents.events;
        },
        getDayName(dayNumber) {
            const dayIndex = new Date(this.year, this.month, dayNumber).getDay();
            return weekday[dayIndex];
        }
    }
};
</script>
<style scoped lang="scss">
@import '@/styles/variables';

p {
    text-align: center;
}
.full-calendar-day-number {
    border: 1px solid #ddd;
    height: 200px;
}
.event {
    height: 100px;
    background: white;
}
</style>
