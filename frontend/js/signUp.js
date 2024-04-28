document.addEventListener("DOMContentLoaded", function () {
    const accountTypeSelect = document.getElementById("account-type");
    const studentInfo = document.getElementById("student-info");
    const staffInfo = document.getElementById("staff-info");

    studentInfo.style.display = "none";
    staffInfo.style.display = "none";

    accountTypeSelect.addEventListener("change", function () {
        const selectedOPtion = accountTypeSelect.value;
        if (selectedOPtion == "student") {
            studentInfo.style.display = "block";
            staffInfo.style.display = "none";
        } else if (selectedOPtion == "staff") {
            studentInfo.style.display = "none";
            staffInfo.style.display = "block";
        } else {
            studentInfo.style.display = "none";
            staffInfo.style.display = "none";
        }
    });
});