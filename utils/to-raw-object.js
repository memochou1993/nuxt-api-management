const toRawObject = (object) => {
  if (Array.isArray(object)) {
    return object.map((item) => toRawObject(item));
  }
  if (object !== null && typeof object === 'object') {
    const rawObject = {};
    Object.keys(object).forEach((key) => {
      rawObject[key] = toRawObject(object[key]);
    });
    return rawObject;
  }
  return toRaw(object);
};

export default toRawObject;
