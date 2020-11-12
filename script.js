
$(document).ready(
    function () {
        // add event handlers

        $('input[type=radio][name="week-day"]').change(function () {

            var selectedRadioButton = $("input[name=week-day]:checked");
            var weekDay = selectedRadioButton.data("week-day");
            // $("#tpipLength").click(showPopup);

            var mySchedule = "";
            switch (weekDay) {
                case 0:
                    mySchedule = "7:30 AM - 4:30 PM";
                    break;
                case 1:
                    mySchedule = "9:00 AM - 5:00 PM";
                    break;
                case 2:
                    mySchedule = "8:30 AM - 12:30 PM";
                    break;
                case 3:
                    mySchedule = "2:45 PM - 4:25 PM";
                    break;
                case 4:
                    mySchedule = "11:30 AM - 12:30 PM";
                    break;
                case 5:
                    mySchedule = "10:00 AM - 2:00 PM";
                    break;
                case 6:
                    mySchedule = "1:30 AM - 5:30 PM";
            }
            // output on the screen
            $("#scheduleOutput").text(`Time ${mySchedule}`);

        });

    }
)
