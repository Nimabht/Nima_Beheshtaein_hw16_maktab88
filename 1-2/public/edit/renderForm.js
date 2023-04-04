const renderForm = (id) => {
  $.ajax({
    url: `/api/employee/${id}`,
    type: "GET",
    dataType: "json",
    success: function (response) {
      const {
        firstname,
        lastname,
        dateOfBirth,
        gender,
        companyName,
        idNumber,
        phoneNumber,
        province,
        roleInCompany,
        registrationDate,
        _id,
      } = response;
      $(".container")
        .html(` <p class="display-4 my-2"><b>Edit profile</b></p>
      <div class="container center">
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="form-group">
              <label for="firstname">First Name:</label>
              <input
                type="text"
                class="form-control"
                id="firstname"
                value="${firstname}" />
            </div>
            <div class="form-group">
              <label for="lastname">Last Name:</label>
              <input
                type="text"
                class="form-control"
                id="lastname"
                value="${lastname}" />
            </div>
            <div class="form-group">
              <label for="dob">Date of Birth:</label>
              <input
                type="text"
                class="form-control"
                id="dateOfBirth"
                value="${dateOfBirth.substring(0, 10)}" />
            </div>
            <div class="form-group">
              <label for="gender">Gender:</label>
              <input
                type="text"
                class="form-control"
                id="gender"
                value="${gender}" />
            </div>
            <div class="form-group">
              <label for="company">Company:</label>
              <input
                type="text"
                class="form-control"
                id="company"
                value="${companyName}" />
            </div>
            <div class="form-group">
              <label for="idNumber">ID Number:</label>
              <input
                type="text"
                class="form-control"
                id="idNumber"
                value="${idNumber}" />
            </div>
            <div class="form-group">
              <label for="phoneNumber">Phone Number:</label>
              <input
                type="text"
                class="form-control"
                id="phoneNumber"
                value="${phoneNumber}" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="province">Province:</label>
              <input
                type="text"
                class="form-control"
                id="province"
                value="${province}" />
            </div>
            <div class="form-group">
              <label for="role">Role in Company:</label>
              <input
                type="text"
                class="form-control"
                id="role"
                value="${roleInCompany}" />
            </div>
            <div class="form-group">
              <label for="regDate">Registration Date:</label>
              <input
                type="text"
                class="form-control"
                id="regDate"
                value="${registrationDate.substring(0, 10)}" 
                readonly/>
            </div>
            <div
              class="form-group d-flex justify-content-center align-items-center h-50 gap-3">
              <button
                class="btn btn-success py-3 px-5"
                id="submit-btn"
                onclick="updateEmployee()">
                Submit
              </button>
              <button
                class="btn btn-danger py-3 px-5"
                id="delete-btn"
                onclick="deleteEmployee()">
                Delete
              </button>
              <button
                class="btn btn-warning py-3 px-5"
                onclick="window.location.href = '/profile/${_id}';">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>`);
    },
  });
};
