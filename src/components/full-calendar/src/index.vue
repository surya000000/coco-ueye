<template>
    <div>
        <div class="card-date-grid">
            <div>
                <slot name="header" />
            </div>
            <div class="">
              <div class="calender-month-year-wrapper">
                <p >{{ months[month]  }} {{ year }}</p>
              </div>
              <Calendar
                  @on-header-click="headerClick"
                  @on-column-click="(param, e) => columnClick({...param}, e)"
                  :year="year"
                  :month="month"
              />
            </div>
        </div>
        <div v-for="(item, i) in lists" :key="item.value" class="card-date-grid">
            <Card
                :image-url="item.imageURL"
                :label="item.label"
                :desc="item.desc"
                :footer-content="item.footerContent"
                width="inherit"
            >
            </Card>
            <Calendar
                @on-header-click="headerClick"
                @on-column-click="(param, e) => columnClick({...param, id: item.value }, e)"
                :date-events="item.dateEvents"
                :event-styles="item.eventStyles"
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
    "value": "Campaign Tasks",
    "label": "Campaign Tasks",
    "footerContent": {
      "leftSpan": [
        {
          "title": "FOS",
          "value": 1
        },
        {
          "title": "BITS",
          "value": 1
        }
      ],
      "rightSpan": [
        {
          "title": "RECORDS",
          "value": '2000/4000'
        }
      ]
    },
    "eventStyles": { backgroundColor: 'red', marginRight: '-1px', marginLeft: '-1px' },
    "dateEvents": [
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-01"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-02"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-03"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-04"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-05"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-06"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-07"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-08"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-09"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-10"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-11"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-12"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-13"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-14"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-15"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 9,
        "task_type": "Campaign Tasks",
        "date": "2020-08-18"
      }
    ]
  },
  {
    "value": "Sale Tasks",
    "label": "Sale Tasks",
    "footerContent": {
      "leftSpan": [
        {
          "title": "FOS",
          "value": 1
        },
        {
          "title": "BITS",
          "value": 1
        }
      ],
      "rightSpan": [
        {
          "title": "RECORDS",
          "value": '9000/10000'
        }
      ]
    },
    "dateEvents": [
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 1,
        "task_type": "Sale Tasks",
        "date": "2020-08-25"
      },
      {
        "id": null,
        "fos_count": 1,
        "bit_count": 1,
        "form_count": 1,
        "task_type": "Sale Tasks",
        "date": "2020-08-29"
      }
    ]
  }
]


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
            // alert("Column clicked day: " + dayNumber + " clicked column index" +index +" Fos id "+ id);
        },
        headerClick(dayNumber) {
            // alert("Column Header clicked day: " + dayNumber);
            document.querySelectorAll(".full-calendar-day-number").forEach(el => {
                el.classList.remove("calendar-active-wrapper");
            });
            document.querySelectorAll(`.day-${dayNumber}`).forEach(el => {
                el.classList.add("calendar-active-wrapper");
            });
        }
    }
};
</script>
