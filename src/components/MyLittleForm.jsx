import pony from '../assets/images.jfif'
import useInput from "../hooks/useInput";
import axios from 'axios'

export default function MyLittleForm() {
  const [name, handleName, resetName] = useInput('');
  const [password, handlePassword, resetPassword] = useInput('');
  const [email, handleEmail, resetEmail] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '' || password === '' || email === '') {
      alert('Por favor, rellena todos los campos')
    } else {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const payload = {
        name: name,
        password: password,
        email: email,
      };
      // fetch(url, {
      //   method: 'POST',
      //   body: JSON.stringify(payload),
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8',
      //   },
      // })
      //   .then((response) => response.json())
      //   .then((json) => alert('Hola ' + json.name + ', tu ID es: ' + json.id))
      //   .catch((error) => console.log(error));

      axios.post('https://jsonplaceholder.typicode.com/posts', payload)
        .then(function (response) {
          alert('Hola ' + response.data.name + ', tu ID es: ' + response.data.id)
        })
        .catch(function (error) {
          console.log(error);
        })

      resetName()
      resetPassword()
      resetEmail()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <img src={pony} alt="Pony" />
      <label>Name</label>
      <input type="text" value={name} onChange={handleName} />
      <label>Password</label>
      <input type="password" value={password} onChange={handlePassword} />
      <label>Email</label>
      <input type="email" value={email} onChange={handleEmail} />
      <button type="submit">Enviar!</button>
    </form>
  );
};

