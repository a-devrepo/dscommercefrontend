export function update(inputs: any, name: string, newValue: any) {
  return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

export function toValues(inputs: any) {
  const data: any = {};
  for (let name in inputs) {
    data[name] = inputs[name].value;
  }
  return data;
}

export function updateAll(inputs: any, newValues: any) {
  const newInputs: any = {};
  for (let name in inputs) {
    newInputs[name] = { ...inputs[name], value: newValues[name] };
  }
  return newInputs;
}

export function validate(inputs: any, name: string) {
  if (!inputs[name].validation) {
    return inputs;
  }
  const value = inputs[name].value;
  const isInvalid = !inputs[name].validation(value);
  return {
    ...inputs,
    [name]: { ...inputs[name], invalid: isInvalid.toString() },
  };
}

export function toDirty(inputs: any, name: string) {
  return { ...inputs, [name]: { ...inputs[name], dirty: "true" } };
}

export function upDateAndValidate(inputs: any, name: string, newValue: any) {
  const dataUpdated = update(inputs, name, newValue);
  const dataValidated = validate(dataUpdated, name);
  return dataValidated;
}

export function dirtyAndValidate(inputs: any, name: string) {
  const dataDirty = toDirty(inputs, name);
  return validate(dataDirty, name);
}