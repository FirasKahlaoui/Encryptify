// src/utils/rbac.js
export const roles = {
  admin: ['encrypt', 'decrypt', 'manageUsers'],
  user: ['encrypt', 'decrypt'],
};

export const checkPermission = (role, action) => {
  return roles[role].includes(action);
};