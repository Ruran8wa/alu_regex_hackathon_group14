const inputDate = "12-Sep-2003";
const regex =
  /^(0[1-9]|[12][0-9]|3[01])-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}$/;

const result = regex.test(inputDate);
if (result) {
  console.log('🎉Nicely formatted dates');
} else {
  console.log('🙊 Wrong date format');
}
