<template>
    <div>
        <p>{{ months[month]  }} {{ year }}</p>
        <div v-for="(item, i) in lists" :key="item.value" class="card-date-grid">
            <Card
                :image-url="item.imageURL"
                :label="item.label"
                :desc="item.desc"
            >
            </Card>
            <Calendar
                @on-header-click="headerClick"
                @on-column-click="(param, e) => columnClick({...param, id: item.value }, e)"
                :date-events="item.dateEvents"
                :show-header="i === 0"
                :year="year"
                :month="month"
            />
        </div>
    </div>
</template>
<script>
import Calendar from "./calendar";
import Card from "@/components/card";
import months from '@/components/interface/months';


const items = [
    {
            label: "Sudhir",
            value: 220,
            dateEvents: [
            {
                date: { from: "2020/07/21", to: "2020/07/25" },
                events: [{
                    name: "s",
                    label: "20%",
                    styles: {
                        color: "blue",
                    }
                }],
            }]
    },
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Breathe_%28Web_series%29_poster.jpg/220px-Breathe_%28Web_series%29_poster.jpg",
        label: "Sudhir Sapkota",
        value: 20,
        desc: "<ul><li>15 task pending</li><li>25 task Remaining</li></ul>",
        dateEvents: [
            {
            date: { from: "2020/07/11", to: "2020/07/14" },
            events: [{
                name: "Tasks",
                icon: "⭐",
                styles: {
                    backgroundColor: "red",
                    marginLeft: "-1px",
                    marginRight: "-1px"
                }
            },
            {
                name: "Sales",
                styles: {
                    backgroundColor: "green",
                    marginLeft: "-1px",
                    marginRight: "-1px"
                }
            }]
        },
        {
        date: { from: "2020/07/14", to: "2020/07/16" },
        events: [
        {
            name: "Tasks",
            styles: {
                backgroundColor: "red",
                marginLeft: "-1px",
                marginRight: "-1px"
            }
        }]
    }]
},
{
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Breathe_%28Web_series%29_poster.jpg/220px-Breathe_%28Web_series%29_poster.jpg",
        label: "Sudhir Sapkota",
        value: 10,
        desc: "<ul><li>15 task pending</li><li>25 task Remaining</li></ul>",
        dateEvents: [{
            date: { from: "2020/07/3", to: "2020/07/10" },
            events: [{
                groupName: "Tasks",
                    styles: {
                        backgroundColor: "blue",
                        marginLeft: "-1px",
                        marginRight: "-1px"
                    }
                }],
            },
            {
            date: { from: "2020/07/12", to: "2020/07/18" },
            events: [{
                groupName: "Tasks",
                styles: {
                    backgroundColor: "red",
                    marginLeft: "-1px",
                    marginRight: "-1px"
                }
            }]
        }]
}];


export default {
    props: {
        lists: {
            type: Array,
            default: () => items,
        },
        year: {
            type: [String, Number],
            default: new Date().getFullYear(),
        },
        month: {
            type: [String, Number],
            default: new Date().getMonth(),
        },
    },
    components: {
        Calendar,
        Card,
    },
    computed: {
        months: () => months,
    },
    methods: {
        columnClick({ index, dayNumber, id }, e) {
            if (!e.target.className.match(/full-calendar-day-number|event/)) {
                return false;
            }
            alert("Column clicked day: " + dayNumber + " clicked column index" +index +" Fos id "+ id);
        },
        headerClick(dayNumber) {
            alert("Column Header clicked day: " + dayNumber);
            document.querySelectorAll(".full-calendar-day-number").forEach(el => {
                el.classList.remove("active");
            });
            document.querySelectorAll(`.day-${dayNumber}`).forEach(el => {
                el.classList.add("active");
            });
        }
    }
};
</script>
