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
    let polipop = new Polipop("newSection", {
      layout: "popups",
      insert: "before",
      pool: 5,
      life: 3000,
      progressbar: true,
    });
    const errors = validateForm(newEmployee);
    if (!!errors) {
      for (const error in errors) {
        polipop.add({
          type: "error",
          title: "Error",
          content: errors[error],
        });
      }
    } else {
      axios
        .post("/api/employee", newEmployee)
        .then((response) => {
          polipop.add({
            type: "success",
            title: "Success",
            content: "Created successfully!",
          });
          setTimeout(() => {
            window.location.href = `/home`;
          }, 3000);
        })
        .catch((error) => {
          polipop.add({
            type: "error",
            title: "Error",
            content: error.response.data.message,
          });
        });
    }
  });
});
