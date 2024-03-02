export const getUserFromLocalStorage = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  } catch (error) {
    console.error("Error retrieving user from local storage:", error);
    return null;
  }
};

export const Token = () => {
  const user = getUserFromLocalStorage();
  return user ? user.token : null;
};
