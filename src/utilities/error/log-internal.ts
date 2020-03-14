import nanoid = require("nanoid");

export function logInternalError(error: Error) {
  const errId = nanoid();
  console.log(`[${Date.now()}] Error ${errId}`);
  console.log(error);

  return errId;
}