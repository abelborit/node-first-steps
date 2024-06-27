interface UsersInterface {
  id: number;
  name: string;
}

interface GetUserByIdArrowProps {
  id: number;
  callback: (error: string | null, user: UsersInterface | null) => void;
}

const users: UsersInterface[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

export const getUserByIdArrow = ({ id, callback }: GetUserByIdArrowProps) => {
  const user = users.find((user) => user.id === id);

  user ? callback(null, user) : callback(`User not found with id ${id}`, null);
};
