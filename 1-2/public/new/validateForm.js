function validateForm(formData) {
  const constraints = {
    firstname: {
      presence: true,
      length: {
        minimum: 3,
        maximum: 30,
      },
    },
    lastname: {
      presence: true,
      length: {
        minimum: 3,
        maximum: 30,
      },
    },
    gender: {
      inclusion: {
        within: ["man", "woman", "unknown", ""],
      },
    },
    dateOfBirth: {
      presence: true,
      format: {
        pattern: /^\d{4}-\d{2}-\d{2}$/,
        message: "must be in the format YYYY-MM-DD",
      },
    },
    phoneNumber: {
      type: "array",
      length: {
        minimum: 1,
      },
    },
    idNumber: {
      presence: true,
      format: {
        pattern: /^\d{10}$/,
      },
    },
    province: {
      length: {
        minimum: 1,
        maximum: 50,
      },
    },
    companyName: {
      presence: true,
      length: {
        minimum: 2,
        maximum: 40,
      },
    },
    roleInCompany: {
      presence: true,
      inclusion: {
        within: ["Employee", "Manager", ""],
      },
    },
  };

  const errors = validate(formData, constraints);

  if (errors) {
    return errors;
  }
}
