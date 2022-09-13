export default function prepareSession(user) {
  return {
    id: user.id,
    email: user.email,
    admin: user.admin,
  };
}
