<template>
    <div>
        <p>{{ months[month]  }} {{ year }}</p>
        <div class="card-date-grid">
            <div>
                <slot name="header" />
            </div>
            <Calendar
                @on-header-click="headerClick"
                @on-column-click="(param, e) => columnClick({...param, id: item.value }, e)"
                :year="year"
                :month="month"
            />
        </div>
        <div v-for="(item, i) in lists" :key="item.value" class="card-date-grid">
            <Card
                :image-url="item.imageURL"
                :label="item.label"
                :desc="item.desc"
                width="inherit"
            >
            </Card>
            <Calendar
                @on-header-click="headerClick"
                @on-column-click="(param, e) => columnClick({...param, id: item.value }, e)"
                :date-events="item.dateEvents"
                :show-header="false"
                :year="year"
                :month="month"
            />
        </div>
    </div>
</template>
<script>
import Calendar from "./calendar";
import Card from "@/components/card";
import months from "@/components/interface/months";


const items = [
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Breathe_%28Web_series%29_poster.jpg/220px-Breathe_%28Web_series%29_poster.jpg",
        label: "Sudhir Sapkota",
        value: 21,
        desc: "<ul><li>15 task pending</li><li>25 task Remaining</li></ul>",
        dateEvents: [
            {
            start: "2020/08/1",
            end: "2020/08/20",
            id: 2,
            name: "Tasks",
            styles: {
                    backgroundColor: "red",
                    marginLeft: "-1px",
                    marginRight: "-1px"
            },
        },
            {
                start: "2020/08/1",
                end: "2020/08/5",
                id: 3,
                name: "Sales",
                styles: {
                    backgroundColor: "green",
                    marginLeft: "-1px",
                    marginRight: "-1px"
                }
            }]
},
    {
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Breathe_%28Web_series%29_poster.jpg/220px-Breathe_%28Web_series%29_poster.jpg",
        label: "Sudhir Sapkota",
        value: 22,
        desc: "<ul><li>15 task pending</li><li>25 task Remaining</li></ul>",
        dateEvents: [
            {
            start: "2020/08/7",
            end: "2020/08/13",
            id: 2,
            name: "Tasks",
            styles: {
                    backgroundColor: "red",
                    marginLeft: "-1px",
                    marginRight: "-1px"
            },
        },
            {
                start: "2020/08/9",
                end: "2020/08/10",
                id: 3,
                name: "Sales",
                styles: {
                    backgroundColor: "green",
                    marginLeft: "-1px",
                    marginRight: "-1px"
                }
            }]
},
{
    imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Breathe_%28Web_series%29_poster.jpg/220px-Breathe_%28Web_series%29_poster.jpg",
    label: "Sudhir Sapkota",
    value: 20,
    desc: "<ul><li>15 task pending</li><li>25 task Remaining</li></ul>",
    dateEvents: [
        {
        start: "2020/08/12",
        end: "2020/08/14",
        id: 2,
        name: "Tasks",
        styles: {
                backgroundColor: "red",
                marginLeft: "-1px",
                marginRight: "-1px"
        },
    },
        {
            start: "2020/08/15",
            end: "2020/08/20",
            id: 3,
            name: "Sales",
            styles: {
                backgroundColor: "green",
                marginLeft: "-1px",
                marginRight: "-1px"
            }
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
