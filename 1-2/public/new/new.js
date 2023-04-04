$(() => {
  $("form").submit(function (e) {
    e.preventDefault();
    const newEmployee = {
      firstname: $("#firstname").val(),
      lastname: $("#lastname").val(),
      gender: $("#gender").val(),
      dateOfBirth: $("#dateOfBirth").val(),
      phoneNumber: $("#phoneNumber").val().split(","),
      idNumber: $("#idNumber").val(),
      province: $("#province").val(),
      companyName: $("#company").val(),
      roleInCompany: $("#role").val(),
    };
    const errors = validateForm(newEmployee);
    if (!!errors) {
      console.log(errors);
    } else {
      axios
        .post("/api/employee", newEmployee)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    }
  });
});
