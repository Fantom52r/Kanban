export async function login({login,password}) {
  try {
    const response = await fetch(" https://wedev-api.sky.pro/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    });
    const isResponseOk = response.ok;
    const result = await response.json();
    if (isResponseOk) {
      return result;
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function registration({login,name,password}) {
  try {
    const response = await fetch("https://wedev-api.sky.pro/api/user", {
      method: "POST",
      body: JSON.stringify({
        login,
        name,
        password,
      }),
    });
    const isResponseOk = response.ok;
    const result = await response.json();
    if (isResponseOk) {
      return result;
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
