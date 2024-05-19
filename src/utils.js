function validateEmail(value) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(value).toLowerCase());
}

function validateName(value) {
  return value && value.length > 0;
}

function validateAge(value) {
  return value && !isNaN(parseInt(value)) && parseInt(value) > 0
}

function validateField(field, value) {
  if (field === "email") {
    return validateEmail(value);
  }else if (field === "name") {
    return validateName(value);
  }else if (field === "age") {
    return validateAge(value);
  }
}

function validateRecordToUpdate(record) {
  const { email, name, age } = record.details;
  return !email && !name && !age
}

export { validateField, validateRecordToUpdate }
