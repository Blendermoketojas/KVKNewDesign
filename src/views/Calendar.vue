<template>
    <div id='app'>
        <ejs-schedule :selectedDate='selectedDate' :eventSettings='eventSettings'></ejs-schedule>
    </div>
</template>
<script>
    import Vue from "vue";
    import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
    Vue.use(SchedulePlugin);
    export default {
        data() {
            return {
                eventSettings: { dataSource: [{
                    Id: 1,
                    Subject: 'Meeting',
                    StartTime: new Date(2023, 1, 15, 10, 0),
                    EndTime: new Date(2023, 1, 15, 12, 30)
                    }] },
                selectedDate: new Date(2023, 1, 15)
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month, Agenda]
        }
    };
</script>
<style>
@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>