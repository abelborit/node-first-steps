interface UsersInterface {
  id: number;
  name: string;
}

interface GetUserByIdProps {
  id: number;
  callback: (error: string | null, user: UsersInterface | null) => void;
}

const users: UsersInterface[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

// function getUserByIdCallback(id: number, callback: Function) {
export function getUserByIdCallback({ id, callback }: GetUserByIdProps) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    /* código no bloqueante porque está dentro de un timeout simulando una petición http (solo se colocó para ver la funcionalidad del argumento que se le suele llamar "done" dentro del archivo del test) */
    // setTimeout(() => {
    //   return callback(`User not found with id ${id}`, null);
    // }, 2000);
    // return;

    /* código bloqueante porque son secuencias */
    return callback(`User not found with id ${id}`, null);
  }

  return callback(null, user);
}
