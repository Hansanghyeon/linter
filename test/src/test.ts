// TypeScript test file
interface User {
  id: number;
  name: string;
  email?: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith' },
];

function getUserById(id: number): User | undefined {
  return users.find((user) => user.id === id);
}

function validateUser(user: User): boolean {
  if (!user.name || user.name.trim() === '') {
    return false;
  }
  if (user.email && !user.email.includes('@')) {
    return false;
  }
  return true;
}

export { User, getUserById, validateUser };
