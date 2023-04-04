const deleteEmployee = () => {
  let url = window.location.href;
  let id = url.match(/edit\/(.*)/)[1];
  $.ajax({
    url: `/api/employee/${id}`,
    method: "DELETE",
    success: function (response) {
      console.log("Request deleted successfully!");
    },
    error: function (xhr, status, error) {
      console.error("Error deleting request: " + error);
    },
  });
};
