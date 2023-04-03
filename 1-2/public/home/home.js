$(() => {
  $.ajax({
    url: `/api/employee/?page=1}`,
    type: "GET",
    dataType: "json",
    success: function (response) {
      const employees = response.data;
      renderContainer(employees, response.total, 1);
    },
    error: function (error) {
      console.log(error);
    },
  });
});
