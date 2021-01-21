import "./App.css";
import { useForm } from "react-cool-form";

const FormField = ({ id, label, error, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} name={id} {...rest} />
    {error && <small>{error}</small>}
  </div>
);

function App() {
  const { form, getState } = useForm({
    defaultValues: { username: "", email: "", password: "" },
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2)),
  });

  const errors = getState("errors", { errorWithTouched: true });

  return (
    <form ref={form} noValidate>
      <FormField
        id="username"
        label="Enter your username"
        placeholder="ex. johnD"
        required
        error={errors.username}
      />
      <FormField
        id="email"
        label="Enter your email address"
        placeholder="ex. john@doe.com"
        type="email"
        required
        error={errors.email}
      />
      <FormField
        id="password"
        label="Enter your password"
        type="password"
        required
        error={errors.password}
      />
      <input type="submit" />
    </form>
  );
}

export default App;
